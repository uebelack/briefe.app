import React from "react";
import getTranslations from "@/functions/getTranslations";
import PageHero from "@/components/PageHero";
import TemplatesClient from "./TemplatesClient";

export default function Templates({ templates, locale }) {
  const t = getTranslations(locale);

  return (
    <div className="templates-index">
      <PageHero title={t("templates.title")} subtitle={t("templates.intro")} />
      <TemplatesClient
        templates={templates}
        locale={locale}
        searchPlaceholder={t("templates.search_placeholder")}
        noResults={t("templates.no_results")}
      />
    </div>
  );
}
