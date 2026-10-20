import Image from "next/image";
import Link from "next/link";
import { CertificationStrip, ContactBand, SiteShell } from "@/components/SiteShell";
import { HomeHero } from "@/components/HomeHero";
import { FeaturedProjectsCarousel } from "@/components/FeaturedProjectsCarousel";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

const [projectManagement, commercial, moh, education, modular] = services;

function ProofIcon() {
  return <svg className="proof-icon" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="20" />
    <path d="m20 10.8 8.2 4.6v9.2L20 29.2l-8.2-4.6v-9.2L20 10.8Z M11.8 15.4 20 20l8.2-4.6M20 20v9.2" />
  </svg>;
}

function ServiceCard({ service, layout }: { service: (typeof services)[number]; layout: "compact" | "tall" }) {
  const displayTitle = service.slug === "moh-acc-kainga-ora" ? "MOH/ACC/ Kāinga Ora" : service.title.toUpperCase();
  return <Reveal className={`home-service-card home-service-${layout} home-service-${service.slug}`}>
    <div className="home-service-copy">
      <h3>{displayTitle}</h3>
      <p>{service.intro}</p>
      <Link href={`/${service.slug}`}>LEARN MORE <span aria-hidden="true">→</span></Link>
    </div>
    <div className="home-service-image">
      <Image src={service.sections[0].image} alt="" fill sizes="(max-width: 820px) 100vw, 50vw" />
    </div>
  </Reveal>;
}

export default function Home() {
  return <SiteShell><main>
    <HomeHero />
    <section className="about-preview"><div className="container about-home-grid">
      <Reveal className="about-home-copy">
        <p className="eyebrow">ABOUT US</p>
        <h2>BUILDING WAIKATO SINCE 1987</h2>
        <p className="about-lead">Mitchell Construction is a trusted Waikato-based construction company delivering education, commercial, and specialist building projects since 1987. From Hamilton and the wider Waikato through to Auckland, Bay of Plenty, Taupō, Hawke’s Bay, New Plymouth and across the Upper and Central North Island our team is known for dependable project management, skilled workmanship, and safe, well-coordinated delivery.</p>
        <div className="home-proof-grid">
          <div className="home-proof"><ProofIcon /><div><h3>BUILT ON PROVEN EXPERIENCE</h3><p>Mitchell Construction has delivered education, commercial, and specialist projects across Hamilton and the wider Waikato for decades, with experience across new builds, refurbishments, upgrades, and live-site works.</p></div></div>
          <div className="home-proof"><ProofIcon /><div><h3>BACKED BY A DEPENDABLE TEAM</h3><p>Their experienced team brings together project managers, site managers, foremen, tradespeople, and office support to keep projects well-managed, coordinated, and delivered to a high standard.</p></div></div>
        </div>
        <Link className="button outline-blue" href="/about-us">ABOUT</Link>
      </Reveal>
      <Reveal className="about-home-image" delay={120}><Image src="/assets/live/ChatGPT-Image-Jun-24-2026-06_33_46-PM.webp" alt="Mitchell Construction team working on scaffolding" fill sizes="(max-width:820px) 100vw, 50vw" /></Reveal>
    </div></section>
    <section className="services-section"><div className="container services-home-inner">
      <p className="eyebrow">OUR SERVICES</p><h2>WHAT WE DELIVER</h2>
      <div className="home-services-layout">
        <div className="home-services-column"><ServiceCard service={projectManagement} layout="compact" /><ServiceCard service={moh} layout="compact" /><ServiceCard service={education} layout="tall" /></div>
        <div className="home-services-column"><ServiceCard service={commercial} layout="tall" /><ServiceCard service={modular} layout="tall" /></div>
      </div>
    </div></section>
    <CertificationStrip />
    <FeaturedProjectsCarousel />
    <ContactBand />
  </main></SiteShell>;
}
