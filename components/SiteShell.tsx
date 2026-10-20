import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { contactItems } from "@/lib/site-data";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}

export function Hero({ title, description, image, primary = "SERVICES", primaryHref = "/services", secondary = "CONTACT", secondaryHref = "/contact-us", home = false }: {
  title: string; description: string; image: string; primary?: string; primaryHref?: string; secondary?: string; secondaryHref?: string; home?: boolean;
}) {
  return (
    <section className={`hero ${home ? "home-hero" : ""}`}>
      <Image src={image} alt="" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button button-white" href={primaryHref}>{primary} <span>→</span></Link>
          <Link className="button button-ghost" href={secondaryHref}>{secondary} <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}

export function CertificationStrip() {
  const logos = [
    ["Rectangle-4.png", "Tōtika"],
    ["Rectangle-4-1.png", "SHE Pre-Qualification"],
    ["Rectangle-5.png", "Site Safe"],
    ["Rectangle-6.png", "Registered Master Builders"],
    ["Rectangle-7.png", "MATES in Construction"],
    ["Untitled-design-30-1.png", "Licensed Building Practitioner"],
    ["Untitled-design-30-1-1.png", "Amotai supplier"],
  ];
  return <section className="cert-strip" aria-label="Accreditations"><div className="container cert-inner"><p className="eyebrow">CERTIFICATIONS</p><h2>CERTIFIED TO DELIVER</h2><div className="cert-logos">{logos.map(([logo, alt]) => <div className="cert-logo" key={logo}><Image src={`/assets/live/${logo}`} alt={alt} fill sizes="140px" /></div>)}</div></div></section>;
}

export function ContactBand() {
  const icons = [
    "/assets/figma/contact-imgIconEmailWBackground.svg",
    "/assets/figma/contact-imgIconPhoneWBackground.svg",
    "/assets/figma/contact-imgIconPinWBackground.svg",
    "",
    "/assets/figma/contact-imgIconPinWBackground.svg",
  ];
  return (
    <section className="contact-band">
      <div className="container contact-band-inner">
        <p className="eyebrow">CONTACT</p>
        <h2>GET IN TOUCH WITH OUR TEAM</h2>
        <div className="contact-grid">
          {contactItems.map(([label, value], index) => <div className="contact-item" key={label}>{index === 3 ? <span className="contact-clock" aria-hidden="true"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="19"/><circle cx="20" cy="20" r="10"/><path d="M20 13v8l5 3"/></svg></span> : <Image src={icons[index]} alt="" width={40} height={40} />}<h3>{label}</h3>{label === "EMAIL" ? <a href="mailto:office@mitchellconstruction.co.nz">{value}</a> : label === "PHONE" ? <a href="tel:+6478471204">{value}</a> : label === "HOURS" ? <p>Monday to Friday<br />7AM-5PM</p> : <p>{value}</p>}</div>)}
        </div>
      </div>
      <div className="container contact-map"><Image src="/assets/figma/contact-imgRectangle12.png" alt="Mitchell Construction service area across the North Island" fill sizes="(max-width: 820px) 100vw, 1480px" /></div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Image src="/assets/figma/about-imgRectangle1.png" alt="Mitchell Construction Ltd" width={410} height={56} />
        <nav aria-label="Footer navigation">
          <Link href="/">HOME</Link><Link href="/about-us">ABOUT</Link><Link href="/services">SERVICES</Link><Link href="/projects">PROJECTS</Link><Link href="/contact-us">CONTACT</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© 2021 - 2026 Mitchell Construction Ltd. Unit 1/550 Te Rapa Road, Te Rapa, Hamilton +6478471204. Powered by <a href="https://gmfb.co.nz/">GMFB Ltd.</a> Page: Construction Company Hamilton | Licensed Building Practitioner<br />- Last updated: 30th April, 2026 <Link href="/">Site Map</Link> | <Link href="/">Links to other quality businesses.</Link></p>
        <div className="socials"><span>f</span><span>◎</span><span>in</span></div>
      </div>
    </footer>
  );
}
