import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

export type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

const colors = {
  blue: "#1a4181",
  mid: "#6e87af",
  pale: "#dce8fb",
  ink: "#111111",
  white: "#ffffff",
};

const bodyStyle = {
  margin: "0",
  padding: "32px 12px",
  backgroundColor: colors.pale,
  color: colors.ink,
  fontFamily: "Arial, Helvetica, sans-serif",
};

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  overflow: "hidden",
  backgroundColor: colors.white,
  borderRadius: "30px 30px 0 30px",
};

const brandStyle = {
  margin: "0",
  padding: "24px 32px",
  backgroundColor: colors.blue,
  color: colors.white,
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "28px",
};

const contentStyle = { padding: "32px" };
const headingStyle = {
  margin: "0 0 18px",
  color: colors.blue,
  fontSize: "30px",
  fontWeight: "500",
  lineHeight: "38px",
};
const copyStyle = {
  margin: "0 0 20px",
  color: colors.ink,
  fontSize: "16px",
  lineHeight: "26px",
};
const labelStyle = {
  margin: "0 0 4px",
  color: colors.mid,
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.8px",
  lineHeight: "18px",
  textTransform: "uppercase" as const,
};
const valueStyle = {
  margin: "0 0 18px",
  color: colors.ink,
  fontSize: "16px",
  lineHeight: "25px",
  whiteSpace: "pre-wrap" as const,
};
const detailsStyle = {
  margin: "22px 0",
  padding: "24px",
  backgroundColor: colors.pale,
  borderRadius: "20px 20px 0 20px",
};
const buttonStyle = {
  boxSizing: "border-box" as const,
  display: "inline-block",
  padding: "13px 22px",
  backgroundColor: colors.blue,
  color: colors.white,
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "20px",
  textDecoration: "none",
  borderRadius: "22px 22px 0 22px",
};
const footerStyle = {
  margin: "0",
  color: "#4f5d73",
  fontSize: "12px",
  lineHeight: "19px",
};

function EmailFrame({ preview, children }: { preview: string; children: React.ReactNode }) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={bodyStyle}>
        <Container lang="en" dir="ltr" style={containerStyle}>
          <Text style={brandStyle}>Mitchell Construction Ltd</Text>
          <Section style={contentStyle}>{children}</Section>
        </Container>
      </Body>
    </Html>
  );
}

export function ContactEnquiryEmail({
  name = "Alex Taylor",
  email = "alex@example.com",
  message = "We would like to discuss an upcoming commercial construction project in Hamilton.",
}: ContactEmailProps) {
  return (
    <EmailFrame preview={`${name} sent a new website enquiry.`}>
      <Heading as="h1" style={headingStyle}>New website enquiry</Heading>
      <Text style={copyStyle}>A new enquiry has been submitted through the Mitchell Construction website.</Text>
      <Section style={detailsStyle}>
        <Text style={labelStyle}>Name</Text>
        <Text style={valueStyle}>{name}</Text>
        <Text style={labelStyle}>Email</Text>
        <Text style={valueStyle}>{email}</Text>
        <Text style={labelStyle}>Message</Text>
        <Text style={{ ...valueStyle, marginBottom: "0" }}>{message}</Text>
      </Section>
      <Button href={`mailto:${email}`} style={buttonStyle}>Reply to {name}</Button>
      <Hr style={{ margin: "28px 0 20px", borderColor: "#c6d5ec", borderStyle: "solid", borderWidth: "1px 0 0" }} />
      <Text style={footerStyle}>Mitchell Construction Ltd · Unit 1/550 Te Rapa Road, Te Rapa, Hamilton · 07 847 1204</Text>
    </EmailFrame>
  );
}

export function ContactConfirmationEmail({
  name = "Alex Taylor",
  email = "alex@example.com",
  message = "We would like to discuss an upcoming commercial construction project in Hamilton.",
}: ContactEmailProps) {
  return (
    <EmailFrame preview="We’ve received your Mitchell Construction enquiry.">
      <Heading as="h1" style={headingStyle}>Thanks, {name}</Heading>
      <Text style={copyStyle}>We’ve received your enquiry and a member of the Mitchell Construction team will get back to you as soon as possible.</Text>
      <Section style={detailsStyle}>
        <Text style={labelStyle}>Your email</Text>
        <Text style={valueStyle}>{email}</Text>
        <Text style={labelStyle}>Your message</Text>
        <Text style={{ ...valueStyle, marginBottom: "0" }}>{message}</Text>
      </Section>
      <Button href="https://mitchellconstruction.co.nz/" style={buttonStyle}>Visit Mitchell Construction</Button>
      <Hr style={{ margin: "28px 0 20px", borderColor: "#c6d5ec", borderStyle: "solid", borderWidth: "1px 0 0" }} />
      <Text style={footerStyle}>Mitchell Construction Ltd · Unit 1/550 Te Rapa Road, Te Rapa, Hamilton · 07 847 1204</Text>
    </EmailFrame>
  );
}

ContactEnquiryEmail.PreviewProps = {
  name: "Alex Taylor",
  email: "alex@example.com",
  message: "We would like to discuss an upcoming commercial construction project in Hamilton.",
} satisfies ContactEmailProps;

ContactConfirmationEmail.PreviewProps = ContactEnquiryEmail.PreviewProps;

export default ContactEnquiryEmail;
