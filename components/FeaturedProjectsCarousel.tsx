"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon, ChevronIcon } from "./InteractionIcons";

const featured = [
  { id: "omakere-school", title: "Omakere School", image: "/assets/live/57b41dcda18010afe50a4470ca3f151a50638812.webp", text: "Staged redevelopment including temporary classrooms, demolition, site recontouring, retaining walls, modular classrooms, covered accessways, outdoor learning areas, and sports court." },
  { id: "waikato-diocesan-school", title: "Waikato Diocesan School for Girls – Sports Education Centre", image: "/assets/live/8a7046406b2ab9a489980d8386c228b93ad5b42c-1-scaled.webp", text: "Award-winning 1,200m² sports education centre with fitness rooms, classrooms, offices, retail space and sustainable building features." },
  { id: "lic-main-reception", title: "LIC – Main Reception / Cafeteria / Boardroom building", image: "/assets/live/9ca7e7e6172ca4cfff7688e8bdbfbb3c11f22952.webp", text: "New 600m² Administration and Café Hub build, including demolition, concrete foundations, structural steel, and full main contractor delivery." },
  { id: "st-johns-college-block-c", title: "St John’s College - Block C ILE Upgrade", image: "/assets/live/a1f1ca0598b5f0c89d9dbbc7c0563187d2669311.png", text: "Major Block C refurbishment including staged interior upgrades, new toilet facilities, external walkways, services, and a steel and concrete balcony." },
  { id: "lic-block-a", title: "LIC Block A ST Genetics Laboratory – PC2 Laboratory", image: "/assets/live/aec048cd-3bc2-4e02-9249-1ee53f3165b9-TICKET.hs_file_upload-St-Johns-New-image-f796f9.png", text: "PC2 laboratory refurbishment within a live 24/7 LIC facility, completed with careful staging, safety controls, and clear communication." },
];

export function FeaturedProjectsCarousel() {
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth <= 820 ? 1 : window.innerWidth <= 1100 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setStart((value) => (value + 1) % featured.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const shown = Array.from({ length: visible }, (_, offset) => featured[(start + offset) % featured.length]);
  const move = (direction: number) => setStart((value) => (value + direction + featured.length) % featured.length);

  return <section className="featured-section">
    <div className="container featured-inner">
      <p className="eyebrow">PORTFOLIO</p>
      <h2>FEATURED PROJECTS</h2>
      <p className="section-intro">A selection of completed projects that showcase Mitchell Construction’s experience, workmanship, and ability to deliver well-managed education, commercial, and specialist building works across the Waikato.</p>
      <div className="featured-carousel">
        <button className="carousel-arrow carousel-arrow-left" type="button" onClick={() => move(-1)} aria-label="Previous projects"><ChevronIcon direction="left" /></button>
        <div className="featured-track" style={{ gridTemplateColumns: `repeat(${visible}, minmax(0, 1fr))` }}>
          {shown.map((project) => <article className="featured-card" key={project.id}>
            <div className="featured-card-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
            <div className="featured-card-copy"><h3><Link href={`/projects#${project.id}`}>{project.title}</Link></h3><p>{project.text}</p><Link className="featured-link action-link" href={`/projects#${project.id}`}>VIEW PROJECT <ArrowIcon /></Link></div>
          </article>)}
        </div>
        <button className="carousel-arrow carousel-arrow-right" type="button" onClick={() => move(1)} aria-label="Next projects"><ChevronIcon direction="right" /></button>
      </div>
      <div className="carousel-dots" aria-label="Project slides">{featured.map((project, index) => <button key={project.id} type="button" className={index === start ? "active" : ""} onClick={() => setStart(index)} aria-label={`Show ${project.title}`} />)}</div>
      <Link className="button outline-blue view-all" href="/projects">VIEW ALL</Link>
    </div>
  </section>;
}
