import React from "react";
import getTranslations from "@/functions/getTranslations";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Container from "@/components/Container";

export default function Templates({ templates, locale }) {
  const t = getTranslations(locale);

  return (
    <Page>
      <Section>
        <Container className="prose proese-briefe">
          <h1>{t("templates.title")}</h1>
          <div className="template-list">
            {templates.map((tpl) => (
              <a
                href={`/${locale}/templates/${tpl.slug}`}
                className="blog-card"
                key={tpl.slug}
              >
                <h2>{tpl.subject}</h2>
                <p>{tpl.teaser}</p>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
