import React from "react";
import Help from "@/components/Help";
import manual from "@/data/manual";

const LOCALE = "nl";

export function generateMetadata() {
  const m = manual[LOCALE] ?? manual.en;
  return {
    title: m.metaTitle,
    description: m.metaDescription,
    keywords: m.keywords,
    alternates: { canonical: m.canonical },
    openGraph: {
      title: m.metaTitle,
      description: m.metaDescription,
      url: m.canonical,
      type: "article",
    },
    twitter: { card: "summary", title: m.metaTitle, description: m.metaDescription },
  };
}

export default function HelpPage() {
  return <Help locale={LOCALE} />;
}
