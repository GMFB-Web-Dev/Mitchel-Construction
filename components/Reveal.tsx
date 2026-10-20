"use client";

import { useEffect, useRef, useState } from "react";

type RevealDirection = "left" | "right" | "up";

export function Reveal({ children, className = "", delay = 0, direction = "left" }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal reveal-from-${direction} ${visible ? "is-visible" : ""} ${className}`} style={{ animationDelay: `${delay}ms` }}>{children}</div>;
}
