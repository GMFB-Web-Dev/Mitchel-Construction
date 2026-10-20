"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setMessage("Thanks — your message is ready to send. Online submissions are not yet connected; please email office@mitchellconstruction.co.nz or call 07 847 1204.");
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>Name<input name="name" autoComplete="name" placeholder="Name" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="Enter your email" required /></label>
      <label className="full">Message<textarea name="message" placeholder="Type your message here..." rows={6} required /></label>
      <label className="check full"><input type="checkbox" required /> <span>I agree to the terms and conditions</span></label>
      <button className="button button-white" type="submit">SUBMIT <span>→</span></button>
      {message && <p className="form-status full" role="status">{message}</p>}
    </form>
  );
}
