"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { scroller } from "react-scroll";

// Scrolls to the AI/Pro section using the same react-scroll scroller the nav
// uses (scroller.get() falls back to document.getElementById, so a plain id
// target works). The offset clears the fixed nav (--nav-h 68 + 1rem).
export default function HeroBadge({ label, target = "pro" }) {
  const handleClick = (e) => {
    e.preventDefault();
    scroller.scrollTo(target, {
      duration: 200,
      smooth: true,
      offset: -84,
    });
  };

  return (
    <a className="hero-eyebrow" href={`#${target}`} onClick={handleClick}>
      <Sparkles className="hero-eyebrow-icon" strokeWidth={2} aria-hidden />
      {label}
    </a>
  );
}
