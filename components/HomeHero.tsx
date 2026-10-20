"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  "/assets/live/57b41dcda18010afe50a4470ca3f151a50638812.webp",
  "/assets/live/attachment-scaled.jpeg",
  "/assets/live/625a2924527cbf060c7bf3e43712bd5c2b9e22f8-1.webp",
  "/assets/live/8a7046406b2ab9a489980d8386c228b93ad5b42c-1-scaled.webp",
  "/assets/live/a1f1ca0598b5f0c89d9dbbc7c0563187d2669311.png",
];

function FactIcon({ type }: { type: "calendar" | "pin" | "quality" | "safety" }) {
  if (type === "calendar") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="38" height="34" rx="3"/><path d="M14 4v10M34 4v10M5 19h38M13 25h5v5h-5zm9 0h5v5h-5zm9 0h5v5h-5zM13 34h5v5h-5zm9 0h5v5h-5zm9 0h5v5h-5z"/></svg>;
  if (type === "pin") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 44S9 30 9 18a15 15 0 0 1 30 0c0 12-15 26-15 26Z"/><circle cx="24" cy="18" r="5"/></svg>;
  if (type === "quality") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="19" r="14"/><path d="m16 31-3 13 11-6 11 6-3-13M18 19l4 4 8-9"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 31c0-9 7-17 16-17s16 8 16 17M5 31h38v7H5zM15 17l-2-7M33 17l2-7M24 14V6M12 38v4h24v-4"/></svg>;
}

export function HomeHero() {
  const [active, setActive] = useState(4);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  return <section className="hero home-hero">
    <div className="hero-slides">{slides.map((src,index) => <Image key={src} src={src} alt="" fill priority={index===0} loading="eager" sizes="100vw" className={`hero-image ${index===active ? "active" : ""}`} />)}</div>
    <div className="hero-overlay" />
    <div className="hero-content container">
      <h1>COMMERCIAL CONSTRUCTION ACROSS WAIKATO &amp; BEYOND</h1>
      <p>MITCHELL CONSTRUCTION DELIVERS TRUSTED COMMERCIAL BUILDING, PROJECT MANAGEMENT, EDUCATION, ACCESSIBILITY AND MODULAR CONSTRUCTION PROJECTS ACROSS WAIKATO, BAY OF PLENTY, AUCKLAND AND WIDER NEW ZEALAND. BACKED BY DECADES OF EXPERIENCE, WE BRING PRACTICAL PLANNING, PROVEN WORKMANSHIP AND A RELIABLE TEAM TO EVERY PROJECT.</p>
      <div className="hero-actions"><Link className="button button-ghost" href="/services">SERVICES</Link><Link className="button button-ghost" href="/contact-us">CONTACT</Link></div>
    </div>
    <div className="home-facts">
      <div className="home-fact"><FactIcon type="calendar" /><span>ESTABLISHED<br />1987</span></div>
      <div className="home-fact"><FactIcon type="pin" /><span>WAIKATO<br />BASED</span></div>
      <div className="home-fact"><FactIcon type="quality" /><span>QUALITY<br />WORKMANSHIP</span></div>
      <div className="home-fact"><FactIcon type="safety" /><span>SAFE SITE<br />MANAGMENT</span></div>
    </div>
  </section>;
}
