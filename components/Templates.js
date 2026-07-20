import React from "react";
import { FileText } from "lucide-react";
import getTranslations from "@/functions/getTranslations";

export default function Templates({ templates, locale }) {
  const t = getTranslations(locale);

  return (
    <div className="templates-index">
      <h1 className="templates-title">{t("templates.title")}</h1>
      <div className="templates-grid">
        {templates.map((tpl) => (
          <a className="template-card" href={`/${locale}/templates/${tpl.slug}`} key={tpl.slug}>
            <span className="template-card-icon" aria-hidden>
              <FileText strokeWidth={1.75} />
            </span>
            <span className="template-card-title">{tpl.subject}</span>
            <span className="template-card-teaser">{tpl.teaser}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
