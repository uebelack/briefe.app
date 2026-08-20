import React from "react";
import AiDisclaimer from "@/components/AiDisclaimer";

const LOCALE = "fr";

export default function BlogArticleLayout({ children }) {
  return (
    <>
      {children}
      <AiDisclaimer locale={LOCALE} />
    </>
  );
}
