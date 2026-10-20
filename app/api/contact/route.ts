import { Resend } from "resend";
import { ContactConfirmationEmail, ContactEnquiryEmail } from "@/emails/contact-enquiry";

const CONTACT_TO = process.env.CONTACT_EMAIL_TO ?? "office@mitchellconstruction.co.nz";
const CONTACT_FROM = process.env.CONTACT_EMAIL_FROM ?? "Mitchell Construction Website <enquiries@weblaunch.co.nz>";
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const attempts = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
  submissionId?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ ok: false, message: "This submission could not be verified." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return Response.json({ ok: false, message: "Your message is too large." }, { status: 413 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return Response.json({ ok: false, message: "Please check the form and try again." }, { status: 400 });
  }

  if (cleanText(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = cleanText(payload.name, 100);
  const email = cleanText(payload.email, 254).toLowerCase();
  const message = cleanText(payload.message, 5_000);
  const submissionId = cleanText(payload.submissionId, 80);

  if (name.length < 2 || !validEmail(email) || message.length < 10) {
    return Response.json({ ok: false, message: "Please enter your name, a valid email, and a message." }, { status: 400 });
  }

  const clientAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientAddress)) {
    return Response.json({ ok: false, message: "Too many messages were submitted. Please try again later." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, message: "Email service is temporarily unavailable. Please call 07 847 1204." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const safeName = name.replace(/[\r\n]+/g, " ");
  const idempotencyKey = `mitchell-contact-${submissionId || crypto.randomUUID()}`;
  const emailProps = { name, email, message };
  const { error } = await resend.batch.send([
    {
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Website enquiry from ${safeName}`,
      react: ContactEnquiryEmail(emailProps),
      text: `New Mitchell Construction website enquiry\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      tags: [{ name: "type", value: "contact-enquiry" }],
    },
    {
      from: CONTACT_FROM,
      to: email,
      replyTo: CONTACT_TO,
      subject: "We received your Mitchell Construction enquiry",
      react: ContactConfirmationEmail(emailProps),
      text: `Thanks, ${name}.\n\nWe’ve received your enquiry and a member of the Mitchell Construction team will get back to you as soon as possible.\n\nYour message:\n${message}\n\nMitchell Construction Ltd\nUnit 1/550 Te Rapa Road, Te Rapa, Hamilton\n07 847 1204`,
      tags: [{ name: "type", value: "contact-confirmation" }],
    },
  ], { idempotencyKey });

  if (error) {
    return Response.json({ ok: false, message: "We couldn’t send your message. Please try again or call 07 847 1204." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
