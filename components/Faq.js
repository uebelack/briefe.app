/* eslint-disable global-require */
import React from "react";
import getTranslations from "@/functions/getTranslations";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq({ locale }) {
  const t = getTranslations(locale);
  const fs = require("fs");
  const dataFile = `./data/faq/${locale}.json`;
  const content = JSON.parse(fs.readFileSync(dataFile).toString());

  return (
    <Page>
      <Section>
        <Container>
          <PageHero title={t("faq.title")} subtitle={t("faq.intro")} />
          <div className="faq">
            {content.categories.map((category) => (
              <section key={category.title} className="faq-category">
                <h2 className="faq-category__title">{category.title}</h2>
                <Accordion type="single" collapsible className="faq-list">
                  {category.questions.map((question) => (
                    <AccordionItem
                      key={question.question}
                      value={question.question}
                      className="faq-item"
                    >
                      <AccordionTrigger className="faq-question">
                        {question.question}
                      </AccordionTrigger>
                      <AccordionContent className="faq-answer">
                        <p>{question.answer}</p>
                        {question.items && (
                          <ul>
                            {question.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {question.links && (
                          <ul className="faq-links">
                            {question.links.map((link) => (
                              <li key={link.url}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
