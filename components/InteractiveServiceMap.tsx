"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { nzRegionPaths } from "@/lib/nz-region-paths";

export function InteractiveServiceMap() {
  const [active, setActive] = useState<string | null>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, xSide: "right", ySide: "top" });
  const frameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
  }, []);

  const moveTooltip = (clientX: number, clientY: number) => {
    const art = artRef.current;
    if (!art) return;

    const bounds = art.getBoundingClientRect();
    pointerRef.current = {
      x: Math.min(Math.max(clientX - bounds.left, 8), bounds.width - 8),
      y: Math.min(Math.max(clientY - bounds.top, 8), bounds.height - 8),
      xSide: clientX - bounds.left > bounds.width * .62 ? "left" : "right",
      ySide: clientY - bounds.top < 70 ? "bottom" : "top",
    };

    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      art.style.setProperty("--map-pointer-x", `${pointerRef.current.x}px`);
      art.style.setProperty("--map-pointer-y", `${pointerRef.current.y}px`);
      art.dataset.tooltipX = pointerRef.current.xSide;
      art.dataset.tooltipY = pointerRef.current.ySide;
    });
  };

  const followPointer = (event: ReactPointerEvent<HTMLDivElement | SVGPathElement>) => {
    moveTooltip(event.clientX, event.clientY);
  };

  const focusRegion = (id: string, label: string) => {
    setActive(label);
    const path = artRef.current?.querySelector<SVGPathElement>(`[data-region-id="${id}"]`);
    if (!path) return;
    const bounds = path.getBoundingClientRect();
    moveTooltip(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2);
  };

  return <div className="interactive-service-map" id="service-map" aria-label="Mitchell Construction service regions">
    <div className="interactive-map-art" ref={artRef} onPointerMove={followPointer} onPointerLeave={(event) => {
      if (event.pointerType === "mouse") setActive(null);
    }}>
      <svg className="interactive-map-svg" viewBox="430 0 640 500" role="img" aria-label="North Island service regions">
        {nzRegionPaths.map((region) => region.label ? <path
          className={`map-region ${active === region.label ? "is-active" : ""}`}
          key={region.id}
          d={region.path}
          data-region-id={region.id}
          aria-hidden="true"
          onPointerEnter={(event) => {
            setActive(region.label);
            followPointer(event);
          }}
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse") {
              setActive(region.label);
              followPointer(event);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setActive(null);
          }}
        /> : <path className="map-region is-inactive" key={region.id} d={region.path} aria-hidden="true" />)}
      </svg>
      <div className="map-region-controls" aria-label="Service regions">
        {nzRegionPaths.filter((region) => region.label).map((region) => <button
          type="button"
          key={region.id}
          onFocus={() => focusRegion(region.id, region.label!)}
          onBlur={() => setActive(null)}
          onClick={() => focusRegion(region.id, region.label!)}
        >{region.label}</button>)}
      </div>
      <div
        className={`map-region-tooltip ${active ? "is-visible" : ""}`}
        role="tooltip"
        aria-hidden={!active}
      >{active}</div>
    </div>
  </div>;
}
