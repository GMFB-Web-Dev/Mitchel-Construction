"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./InteractionIcons";

const history = [
  {
    year: "1987",
    copy: "Mitchell Construction was founded by Colin Mitchell in Hamilton, beginning as a local Waikato building company with a strong focus on practical workmanship and reliable delivery.",
  },
  {
    year: "1990s",
    copy: "The company continued to grow across the Waikato, building long-term relationships and taking on a wider range of commercial and education construction projects.",
  },
  {
    year: "2000s",
    copy: "Mitchell Construction expanded its capability across school upgrades, commercial refurbishments, fit-outs, and specialist building works, strengthening its reputation for dependable project delivery.",
  },
  {
    year: "2010s",
    copy: "The business continued to develop its team, systems, and project management capability, supporting larger and more complex projects across Hamilton and the wider Waikato.",
  },
  {
    year: "2020",
    copy: "A new generation stepped further into the business, with Brad, Jared, and Nicole becoming more involved in the office and day-to-day operations. This marked an important stage in the company’s continued growth as a family-led construction business.",
  },
  {
    year: "Today",
    copy: "Mitchell Construction remains a trusted family-led construction company, delivering commercial, education, and specialist projects with experienced leadership, strong site management, and a commitment to quality.",
  },
] as const;

export function AboutTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollBehavior = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  const updatePosition = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const progress = maxScroll ? viewport.scrollLeft / maxScroll : 0;
    setActiveDot(Math.round(progress * (history.length - 1)));
    setAtStart(viewport.scrollLeft <= 2);
    setAtEnd(viewport.scrollLeft >= maxScroll - 2);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(updatePosition);
    observer.observe(viewport);
    updatePosition();
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [updatePosition]);

  const handleScroll = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(updatePosition);
  };

  const scrollToDot = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    viewport.scrollTo({ left: maxScroll * (index / (history.length - 1)), behavior: scrollBehavior() });
  };

  const move = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const card = viewport.querySelector<HTMLElement>(".about-timeline-card");
    const track = viewport.querySelector<HTMLElement>(".about-timeline-track");
    const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap) || 0 : 0;
    viewport.scrollBy({ left: direction * ((card?.offsetWidth ?? viewport.clientWidth) + gap), behavior: scrollBehavior() });
  };

  return (
    <div className="about-timeline">
      <div
        className="about-timeline-viewport"
        ref={viewportRef}
        onScroll={handleScroll}
        tabIndex={0}
        aria-label="Mitchell Construction history timeline"
      >
        <div className="about-timeline-track">
          {history.map((item) => (
            <article className="about-timeline-card" key={item.year}>
              <h3>{item.year}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="about-timeline-controls">
        <div className="about-timeline-dots" aria-label="Timeline positions">
          {history.map((item, index) => (
            <button
              className={index === activeDot ? "active" : ""}
              type="button"
              key={item.year}
              onClick={() => scrollToDot(index)}
              aria-label={`Show ${item.year}`}
              aria-current={index === activeDot ? "step" : undefined}
            />
          ))}
        </div>
        <div className="about-timeline-arrows">
          <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Earlier history">
            <ArrowIcon direction="left" />
          </button>
          <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Later history">
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
