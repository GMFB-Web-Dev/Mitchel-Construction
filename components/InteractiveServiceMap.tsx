"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

type Region = {
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
  shape: string;
  zIndex: number;
};

const regions: Region[] = [
  { label: "Upper North", left: 42, top: 2.5, width: 10.3, height: 28.5, shape: "polygon(31% 0, 70% 8%, 91% 31%, 82% 54%, 98% 76%, 68% 100%, 38% 91%, 31% 67%, 7% 34%)", zIndex: 1 },
  { label: "Auckland", left: 46.6, top: 23.5, width: 4, height: 12, shape: "polygon(31% 0, 100% 24%, 84% 68%, 42% 100%, 0 64%)", zIndex: 5 },
  { label: "Taupō", left: 47, top: 29, width: 8.8, height: 34.5, shape: "polygon(21% 0, 79% 7%, 100% 36%, 76% 71%, 68% 100%, 26% 91%, 0 55%)", zIndex: 2 },
  { label: "Bay of Plenty", left: 51.5, top: 31, width: 13, height: 29, shape: "polygon(0 10%, 39% 0, 71% 18%, 100% 8%, 88% 61%, 65% 100%, 33% 77%, 10% 50%)", zIndex: 3 },
  { label: "Hawke’s Bay / Napier", left: 56, top: 50, width: 8.7, height: 27, shape: "polygon(19% 0, 76% 8%, 100% 34%, 86% 100%, 39% 91%, 0 52%)", zIndex: 4 },
  { label: "New Plymouth", left: 42.2, top: 49, width: 7.5, height: 20, shape: "polygon(18% 17%, 74% 0, 100% 39%, 72% 100%, 18% 80%, 0 48%)", zIndex: 4 },
  { label: "Central North", left: 48.5, top: 54, width: 10, height: 31, shape: "polygon(15% 0, 82% 4%, 100% 49%, 74% 100%, 26% 91%, 0 48%)", zIndex: 3 },
];

export function InteractiveServiceMap() {
  const [active, setActive] = useState<Region | null>(null);

  return <div className="interactive-service-map" aria-label="Mitchell Construction service regions">
    <div className="interactive-map-art">
      <Image src="/assets/figma/contact-imgRectangle12.png" alt="North Island service regions" fill sizes="(max-width: 820px) 90vw, 1480px" />
      {regions.map((region) => {
        const style: CSSProperties = {
          left: `${region.left}%`,
          top: `${region.top}%`,
          width: `${region.width}%`,
          height: `${region.height}%`,
          clipPath: region.shape,
          zIndex: region.zIndex,
        };
        return <button
          className="map-region"
          type="button"
          key={region.label}
          style={style}
          aria-label={`${region.label} service region`}
          onMouseEnter={() => setActive(region)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(region)}
          onBlur={() => setActive(null)}
        />;
      })}
      <div
        className={`map-region-tooltip ${active ? "is-visible" : ""}`}
        style={active ? { left: `${active.left + active.width / 2}%`, top: `${active.top + active.height / 2}%` } : undefined}
        aria-hidden="true"
      >{active?.label}</div>
    </div>
  </div>;
}
