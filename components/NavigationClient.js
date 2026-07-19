"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { scroller } from "react-scroll";
import LanguageSelect from "./LanguageSelect";
import languages from "@/data/languages";

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
  const [open, setOpen] = useState(false);

  const handleOnClick = (e, target) => {
    if (Object.keys(languages).indexOf(window.location.pathname.substring(1)) >= 0) {
      scroller.scrollTo(target, { duration: 500, smooth: "easeInOutQuart", offset: -100 });
      e.preventDefault();
    }
    setOpen(false);
  };

  const anchors = [
    { key: "details", label: details, target: "details", href: `/${locale}#details` },
    { key: "features", label: features, target: "features", href: `/${locale}#features` },
    ...(showBlog ? [{ key: "blog", label: blog, target: "blog", href: `/${locale}#blog` }] : []),
    ...(showTemplates
      ? [{ key: "templates", label: templates, href: `/${locale}/templates` }]
      : []),
    { key: "contact", label: contact, target: "contact", href: `/${locale}#contact` },
    { key: "faq", label: faq, href: `/${locale}/faq` },
    { key: "help", label: help, href: `/${locale}/${helpLink}` },
  ];

  const renderLink = (item) =>
    item.target ? (
      <a key={item.key} href={item.href} onClick={(e) => handleOnClick(e, item.target)}>
        {item.label}
      </a>
    ) : (
      <a key={item.key} href={item.href} onClick={() => setOpen(false)}>
        {item.label}
      </a>
    );

  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link href={`/${locale}`} className="nav-brand" aria-label={title}>
          <Image src="/logo.svg" alt="Letter logo" width={28} height={28} />
          <span>{title}</span>
        </Link>

        <div className="nav-links">{anchors.map(renderLink)}</div>

        <div className="nav-sep" aria-hidden="true" />

        <LanguageSelect language={language} locale={locale} />

        <a
          className="nav-cta"
          href="http://itunes.apple.com/app/letter/id498506154"
          style={{ marginLeft: 8 }}
        >
          {download}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`nav-sheet${open ? " open" : ""}`}>
        <div className="nav-sheet-inner">
          {anchors.map(renderLink)}
          <a
            href="http://itunes.apple.com/app/letter/id498506154"
            onClick={() => setOpen(false)}
            style={{ color: "var(--brand)", fontWeight: 550 }}
          >
            {download}
          </a>
        </div>
      </div>
    </header>
  );
}
