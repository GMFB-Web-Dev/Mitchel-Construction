"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowIcon, ChevronIcon } from "./InteractionIcons";
import { Reveal } from "./Reveal";

const featured = [
  { id: "omakere-school", title: "Omakere School", image: "/assets/live/57b41dcda18010afe50a4470ca3f151a50638812.webp", text: "Staged redevelopment including temporary classrooms, demolition, site recontouring, retaining walls, modular classrooms, covered accessways, outdoor learning areas, and sports court." },
  { id: "waikato-diocesan-school", title: "Waikato Diocesan School for Girls – Sports Education Centre", image: "/assets/live/8a7046406b2ab9a489980d8386c228b93ad5b42c-1-scaled.webp", text: "Award-winning 1,200m² sports education centre with fitness rooms, classrooms, offices, retail space and sustainable building features." },
  { id: "lic-main-reception", title: "LIC – Main Reception / Cafeteria / Boardroom building", image: "/assets/live/9ca7e7e6172ca4cfff7688e8bdbfbb3c11f22952.webp", text: "New 600m² Administration and Café Hub build, including demolition, concrete foundations, structural steel, and full main contractor delivery." },
  { id: "st-johns-college-block-c", title: "St John’s College - Block C ILE Upgrade", image: "/assets/live/a1f1ca0598b5f0c89d9dbbc7c0563187d2669311.png", text: "Major Block C refurbishment including staged interior upgrades, new toilet facilities, external walkways, services, and a steel and concrete balcony." },
  { id: "lic-block-a", title: "LIC Block A ST Genetics Laboratory – PC2 Laboratory", image: "/assets/live/aec048cd-3bc2-4e02-9249-1ee53f3165b9-TICKET.hs_file_upload-St-Johns-New-image-f796f9.png", text: "PC2 laboratory refurbishment within a live 24/7 LIC facility, completed with careful staging, safety controls, and clear communication." },
];

const normalize = (value: number) => (value + featured.length) % featured.length;

export function FeaturedProjectsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const visibleRef = useRef(3);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(3);
  const [trackIndex, setTrackIndex] = useState(3);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const next = window.innerWidth <= 820 ? 1 : window.innerWidth <= 1100 ? 2 : 3;
      if (next === visibleRef.current) return;
      visibleRef.current = next;
      setAnimate(false);
      setVisible(next);
      setTrackIndex(next + activeRef.current);
      frame = window.requestAnimationFrame(() => setAnimate(true));
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    const update = () => setViewportWidth(node.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const move = useCallback((direction: number) => {
    setAnimate(true);
    setActive((value) => {
      const next = normalize(value + direction);
      activeRef.current = next;
      return next;
    });
    setTrackIndex((value) => value + direction);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => move(1), 5000);
    return () => window.clearInterval(timer);
  }, [move]);

  const slides = useMemo(() => [
    ...featured.slice(-visible).map((project) => ({ project, clone: true, key: `before-${project.id}` })),
    ...featured.map((project) => ({ project, clone: false, key: `main-${project.id}` })),
    ...featured.slice(0, visible).map((project) => ({ project, clone: true, key: `after-${project.id}` })),
  ], [visible]);
  const gap = 20;
  const slideWidth = viewportWidth > 0 ? (viewportWidth - gap * (visible - 1)) / visible : 0;
  const step = slideWidth + gap;

  const goTo = (index: number) => {
    setAnimate(true);
    activeRef.current = index;
    setActive(index);
    setTrackIndex(visible + index);
  };

  const settleLoop = () => {
    if (trackIndex >= visible + featured.length || trackIndex < visible) {
      setAnimate(false);
      setTrackIndex(visible + active);
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setAnimate(true)));
    }
  };

  return <section className="featured-section">
    <div className="container featured-inner">
      <Reveal className="featured-intro">
        <p className="eyebrow">PORTFOLIO</p>
        <h2>FEATURED PROJECTS</h2>
        <p className="section-intro">A selection of completed projects that showcase Mitchell Construction’s experience, workmanship, and ability to deliver well-managed education, commercial, and specialist building works across the Waikato.</p>
      </Reveal>
      <Reveal className="featured-motion" direction="right" delay={100}>
        <div className="featured-carousel">
          <button className="carousel-arrow carousel-arrow-left" type="button" onClick={() => move(-1)} aria-label="Previous projects"><ChevronIcon direction="left" /></button>
          <div className="featured-viewport" ref={viewportRef}>
            <div className={`featured-track ${animate ? "" : "no-transition"}`} style={{ transform: `translate3d(${-trackIndex * step}px,0,0)`, opacity: viewportWidth ? 1 : 0 }} onTransitionEnd={settleLoop}>
              {slides.map(({ project, clone, key }) => <div className="featured-slide" key={key} style={{ flexBasis: slideWidth || `calc(${100 / visible}% - ${(gap * (visible - 1)) / visible}px)` }} aria-hidden={clone || undefined}>
                <article className="featured-card">
                  <div className="featured-card-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
                  <div className="featured-card-copy"><h3><Link tabIndex={clone ? -1 : undefined} href={`/projects#${project.id}`}>{project.title}</Link></h3><p>{project.text}</p><Link tabIndex={clone ? -1 : undefined} className="featured-link action-link" href={`/projects#${project.id}`}>VIEW PROJECT <ArrowIcon /></Link></div>
                </article>
              </div>)}
            </div>
          </div>
          <button className="carousel-arrow carousel-arrow-right" type="button" onClick={() => move(1)} aria-label="Next projects"><ChevronIcon direction="right" /></button>
        </div>
      </Reveal>
      <div className="carousel-dots" aria-label="Project slides">{featured.map((project, index) => <button key={project.id} type="button" className={index === active ? "active" : ""} onClick={() => goTo(index)} aria-label={`Show ${project.title}`} />)}</div>
      <Link className="button outline-blue view-all" href="/projects">VIEW ALL</Link>
    </div>
  </section>;
}
