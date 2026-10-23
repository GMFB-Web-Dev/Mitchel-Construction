"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronIcon } from "./InteractionIcons";

const publications = [
  ["/assets/publications/business-north-building-page-93-hires.png", "Business North feature about Mitchell Construction"],
  ["/assets/publications/business-north-dec-2023-page-92.png", "Business North December 2023, page 92"],
  ["/assets/publications/business-north-dec-2023-page-93.png", "Business North December 2023, page 93"],
  ["/assets/publications/business-north-jul-2025-page-15.png", "Business North July 2025, page 15"],
  ["/assets/publications/business-north-jun-2024-page-90.png", "Business North June 2024, page 90"],
  ["/assets/publications/business-north-jun-2024-page-91.png", "Business North June 2024, page 91"],
  ["/assets/publications/colin-mitchell-waikato-times-page-19.png", "Waikato Times article featuring Colin Mitchell, page 19"],
  ["/assets/publications/colin-mitchell-waikato-times-page-20.png", "Waikato Times article featuring Colin Mitchell, page 20"],
] as const;

const getScrollBehavior = (): ScrollBehavior => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export function PublicationCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || viewport.clientWidth === 0) return;
    setActiveIndex(Math.min(publications.length - 1, Math.round(viewport.scrollLeft / viewport.clientWidth)));
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(() => {
      viewport.scrollTo({ left: activeIndex * viewport.clientWidth });
    });
    observer.observe(viewport);
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [activeIndex]);

  const handleScroll = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(updateIndex);
  };

  const goTo = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const nextIndex = Math.max(0, Math.min(publications.length - 1, index));
    viewport.scrollTo({ left: nextIndex * viewport.clientWidth, behavior: getScrollBehavior() });
  };

  return (
    <div className="publication-carousel">
      <div className="publication-carousel-frame">
        <div
          className="publication-carousel-viewport"
          ref={viewportRef}
          onScroll={handleScroll}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") goTo(activeIndex - 1);
            if (event.key === "ArrowRight") goTo(activeIndex + 1);
          }}
          tabIndex={0}
          aria-label="Industry publication gallery"
        >
          <div className="publication-carousel-track">
            {publications.map(([src, alt]) => (
              <figure className="publication-slide" key={src}>
                <Image src={src} alt={alt} fill sizes="(max-width: 980px) 90vw, 44vw" />
              </figure>
            ))}
          </div>
        </div>
      </div>
      <button className="publication-arrow publication-arrow-left" type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous publication">
        <ChevronIcon direction="left" />
      </button>
      <button className="publication-arrow publication-arrow-right" type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === publications.length - 1} aria-label="Next publication">
        <ChevronIcon />
      </button>
      <div className="publication-dots" aria-label="Publication positions">
        {publications.map(([, alt], index) => <button className={index === activeIndex ? "active" : ""} type="button" key={alt} onClick={() => goTo(index)} aria-label={`Show publication ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} />)}
      </div>
    </div>
  );
}
