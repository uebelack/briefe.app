import React from "react";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Letter from "@/components/Letter";
import CallToAction from "@/components/CallToAction";

const LOCALE = "es";

export default function TemplatesLayout({ children }) {
  return (
    <Page>
      <Section className="blog">
        <Letter locale={LOCALE}>{children}</Letter>
        <CallToAction locale={LOCALE} />
      </Section>
    </Page>
  );
}
