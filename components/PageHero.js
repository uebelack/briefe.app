import React from "react";

// Shared page header used across the Help, FAQ and Templates sub-pages so they
// all share the same title layout: a small brand eyebrow, a large light title,
// and an optional subtitle. Extra content (e.g. a callout) can be passed as
// children and renders directly below the subtitle.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <div className="page-hero">
      {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
      <h1 className="page-hero__title">{title}</h1>
      {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
      {children}
    </div>
  );
}
