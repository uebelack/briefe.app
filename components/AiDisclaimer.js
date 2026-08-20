import React from "react";
import getTranslations from "@/functions/getTranslations";

export default function AiDisclaimer({ locale }) {
  const t = getTranslations(locale);
  return <p className="ai-disclaimer">{t("blog.ai_disclaimer")}</p>;
}
