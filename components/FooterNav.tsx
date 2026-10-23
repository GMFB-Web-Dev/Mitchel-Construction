"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/site-data";

const links = [
  ["HOME", "/"],
  ["ABOUT", "/about-us"],
  ["SERVICES", "/services"],
  ["PROJECTS", "/projects"],
  ["CONTACT", "/contact-us"],
] as const;

export function FooterNav() {
  const pathname = usePathname();
  const serviceRoute = services.some((service) => pathname === `/${service.slug}`);

  const isActive = (href: string) => {
    if (href === "/services") return pathname === href || serviceRoute;
    return pathname === href;
  };

  return <nav aria-label="Footer navigation">
    {links.map(([label, href]) => {
      const active = isActive(href);
      return <Link className={active ? "active" : ""} aria-current={active ? "page" : undefined} href={href} key={href}>{label}</Link>;
    })}
  </nav>;
}
