"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { scroller } from "react-scroll";
import LanguageSelect from "./LanguageSelect";
import languages from "@/data/languages";

const APP_STORE_URL = "http://itunes.apple.com/app/letter/id498506154";

export default function Navigation({
  showBlog,
  showTemplates,
  language,
  title,
  details,
  features,
  blog,
  templates,
  contact,
  faq,
  help,
  helpLink,
  download,
  locale,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu once the viewport grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onLinkClick = (e, target) => {
    if (target && Object.keys(languages).indexOf(window.location.pathname.substring(1)) >= 0) {
      e.preventDefault();
      scroller.scrollTo(target, { duration: 200, smooth: true, offset: -84 });
    }
    setOpen(false);
  };

  const links = [
    { label: details, href: `/${locale}#details`, target: "details" },
    { label: features, href: `/${locale}#features`, target: "features" },
    ...(showBlog ? [{ label: blog, href: `/${locale}#blog`, target: "blog" }] : []),
    ...(showTemplates ? [{ label: templates, href: `/${locale}/templates` }] : []),
    { label: contact, href: `/${locale}#contact`, target: "contact" },
    { label: faq, href: `/${locale}/faq` },
    { label: help, href: `/${locale}/${helpLink}` },
  ];

  const renderLink = (l) => (
    <a key={l.label} className="nav-link" href={l.href} onClick={(e) => onLinkClick(e, l.target)}>
      {l.label}
    </a>
  );

  return (
    <header className="site-nav" data-scrolled={scrolled} data-open={open}>
      <div className="md:container px-4 nav-bar">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="Letter logo" width={30} height={21} />
          <span>{title}</span>
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          {links.map(renderLink)}
          <span className="nav-divider" />
          <LanguageSelect language={language} locale={locale} />
          <a className="nav-cta" href={APP_STORE_URL}>
            {download}
          </a>
        </nav>

        <button
          type="button"
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X strokeWidth={2} aria-hidden /> : <Menu strokeWidth={2} aria-hidden />}
        </button>
      </div>

      <div className="nav-mobile" inert={!open}>
        <nav className="nav-mobile-inner" aria-label="Mobile">
          {links.map(renderLink)}
          <a className="nav-cta nav-cta-block" href={APP_STORE_URL} onClick={() => setOpen(false)}>
            {download}
          </a>
          <div className="nav-mobile-lang">
            <LanguageSelect language={language} locale={locale} />
          </div>
        </nav>
      </div>
    </header>
  );
}
