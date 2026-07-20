"use client";

import React, { useEffect, useState } from "react";
import { Mail, Sparkles, Send, Stamp } from "lucide-react";
import addresses from "@/data/addresses";

export default function HeroLetter({ locale, subject, letterText }) {
  const a = addresses[locale] ?? addresses.en;
  const date = new Date().toLocaleDateString(a.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(letterText);
      setDone(true);
      return undefined;
    }
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i += 1;
        setTyped(letterText.slice(0, i));
        if (i >= letterText.length) {
          clearInterval(id);
          setDone(true);
        }
      }, 30);
    }, 500);
    return () => clearTimeout(start);
  }, [letterText]);

  return (
    <div className="hero-stage" aria-hidden>
      <div className="hero-stage-inner">
        <div className="hero-letter hero-letter-back" />

        <div className="hero-letter hero-letter-front">
          <span className="hero-stamp">
            <Stamp strokeWidth={1.75} />
          </span>

          <div className="hero-doc">
            <address className="hl-sender">
              <span className="hl-name">{a.sender.name}</span>
              {a.sender.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <address className="hl-recipient">
              <span className="hl-name">{a.recipient.name}</span>
              {a.recipient.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <div className="hl-date">
              {a.city}, {date}
            </div>

            <div className="hl-subject">{subject}</div>

            <p className="hl-body" data-done={done}>
              {typed}
            </p>

            {done && <span className="hl-sign">{a.sender.name}</span>}
          </div>
        </div>

        <span className="hero-chip hero-chip-mail">
          <Mail strokeWidth={1.75} />
        </span>
        <span className="hero-chip hero-chip-ai">
          <Sparkles strokeWidth={1.75} />
        </span>
        <span className="hero-chip hero-chip-send">
          <Send strokeWidth={1.75} />
        </span>
      </div>
    </div>
  );
}
