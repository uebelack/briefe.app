import React from "react";
import AiDisclaimer from "@/components/AiDisclaimer";

const LOCALE = "es";

export default function BlogArticleLayout({ children }) {
  return (
    <>
      {children}
      <AiDisclaimer locale={LOCALE} />
    </>
  );
}
