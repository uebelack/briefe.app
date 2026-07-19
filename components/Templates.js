import React from "react";
import getTranslations from "@/functions/getTranslations";

export default function Templates({ templates, locale }) {
  const t = getTranslations(locale);

  // Rendered inside the shared templates layout (Page > Section > prose).
  // Break out of the narrow prose column for the full-width card grid.
  return (
    <div className="not-prose templates-index">
      <p className="eyebrow">{t("templates.menu")}</p>
      <h1 className="headline" style={{ marginTop: 10, marginBottom: 40 }}>
        {t("templates.title")}
      </h1>
      <div className="template-list">
        {templates.map((tpl) => (
          <a href={`/${locale}/templates/${tpl.slug}`} className="blog-card" key={tpl.slug}>
            <h2>{tpl.subject}</h2>
            <p>{tpl.teaser}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
