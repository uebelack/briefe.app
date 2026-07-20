import React from "react";
import getTranslations from "@/functions/getTranslations";
import TemplatesClient from "./TemplatesClient";

export default function Templates({ templates, locale }) {
  const t = getTranslations(locale);

  return (
    <div className="templates-index">
      <h1 className="templates-title">{t("templates.title")}</h1>
      <p className="templates-intro">{t("templates.intro")}</p>
      <TemplatesClient
        templates={templates}
        locale={locale}
        searchPlaceholder={t("templates.search_placeholder")}
        noResults={t("templates.no_results")}
      />
    </div>
  );
}
