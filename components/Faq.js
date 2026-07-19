/* eslint-disable global-require */
import React from "react";
import getTranslations from "@/functions/getTranslations";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Container from "@/components/Container";
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
          <div className="faq-wrap">
            <p className="eyebrow">FAQ</p>
            <h1 className="headline" style={{ marginTop: 10, marginBottom: 40 }}>
              {t("faq.title")}
            </h1>
            {content.categories.map((category) => (
              <div key={category.title} style={{ marginBottom: 40 }}>
                <div className="faq-category-title">{category.title}</div>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((question) => (
                    <AccordionItem key={question.question} value={question.question}>
                      <AccordionTrigger className="text-left">{question.question}</AccordionTrigger>
                      <AccordionContent>
                        <p>{question.answer}</p>
                        {question.items && (
                          <ul className="list-disc pl-6 mt-2">
                            {question.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
