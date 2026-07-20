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
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-8">{t("faq.title")}</h1>
          {content.categories.map((category) => (
            <div key={category.title} className="mb-8">
              <h2 className="text-2xl font-light tracking-tight mb-4">{category.title}</h2>
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
        </Container>
      </Section>
    </Page>
  );
}
