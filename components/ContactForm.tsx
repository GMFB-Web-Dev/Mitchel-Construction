"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; message: string }>({ type: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    setStatus({ type: "sending", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
          submissionId: crypto.randomUUID(),
        }),
      });
      const result = await response.json() as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Unable to send your message.");

      form.reset();
      setStatus({ type: "success", message: "Thanks — your message has been sent. We’ll be in touch soon." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Unable to send your message. Please try again." });
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label className="full">Name<input name="name" autoComplete="name" placeholder="Name" required /></label>
      <label className="full">Email<input name="email" type="email" autoComplete="email" placeholder="Enter your email" required /></label>
      <label className="full">Message<textarea name="message" placeholder="Type your message here..." rows={6} required /></label>
      <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="check full"><input name="terms" type="checkbox" required /> <span>I agree to the terms and conditions</span></label>
      <button className="button outline-blue" type="submit" disabled={status.type === "sending"}>{status.type === "sending" ? "SENDING…" : "SUBMIT"}</button>
      {status.message && <p className={`form-status full ${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}
    </form>
  );
}
