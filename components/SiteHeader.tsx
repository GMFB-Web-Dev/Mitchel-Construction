"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/lib/site-data";
import { ArrowIcon, ChevronIcon } from "./InteractionIcons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  const active = (href: string) => pathname === href;

  return (
    <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="site-logo" aria-label="Mitchell Construction home">
          <Image src="/assets/figma/about-imgRectangle1.png" alt="Mitchell Construction Ltd" width={420} height={57} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className={active("/") ? "active" : ""} href="/">HOME</Link>
          <Link className={active("/about-us") ? "active" : ""} href="/about-us">ABOUT</Link>
          <div className="nav-dropdown">
            <Link className={pathname.startsWith("/services") || services.some((item) => pathname === `/${item.slug}`) ? "active" : ""} href="/services">
              SERVICES <ChevronIcon direction="down" />
            </Link>
            <div className="dropdown-panel">
              {services.map((service) => <Link key={service.slug} href={`/${service.slug}`}>{service.title}</Link>)}
            </div>
          </div>
          <div className="nav-dropdown">
            <Link className={active("/projects") ? "active" : ""} href="/projects">PROJECTS <ChevronIcon direction="down" /></Link>
            <div className="dropdown-panel project-menu">
              <Link href="/projects#omakere-school">Omakere School</Link>
              <Link href="/projects#waikato-diocesan-school">Waikato Diocesan School</Link>
              <Link href="/projects#lic-main-reception">LIC Main Reception</Link>
              <Link href="/projects#st-johns-college-block-c">St John’s College Block C</Link>
              <Link href="/projects#lic-block-a">LIC Block A Laboratory</Link>
            </div>
          </div>
          <Link className={active("/contact-us") ? "active" : ""} href="/contact-us">CONTACT</Link>
          <a className="phone-pill" href="tel:+6478471204">07 847 1204 <ArrowIcon /></a>
        </nav>
        <button className={`menu-toggle ${open ? "open" : ""}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
        <Link href="/about-us" onClick={() => setOpen(false)}>ABOUT</Link>
        <button onClick={() => setServicesOpen((value) => !value)} aria-expanded={servicesOpen}>SERVICES <ChevronIcon direction={servicesOpen ? "up" : "down"} /></button>
        <div className={`mobile-submenu ${servicesOpen ? "open" : ""}`}>
          <Link href="/services" onClick={() => setOpen(false)}>All services</Link>
          {services.map((service) => <Link key={service.slug} href={`/${service.slug}`} onClick={() => setOpen(false)}>{service.title}</Link>)}
        </div>
        <Link href="/projects" onClick={() => setOpen(false)}>PROJECTS <ChevronIcon direction="down" /></Link>
        <Link href="/contact-us" onClick={() => setOpen(false)}>CONTACT</Link>
        <a className="mobile-phone" href="tel:+6478471204">07 847 1204</a>
      </div>
    </header>
  );
}
