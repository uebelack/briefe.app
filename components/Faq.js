/* eslint-disable global-require */
import React from 'react';
import getTranslations from '@/functions/getTranslations';
import Page from '@/components/Page';
import Section from '@/components/Section';
import Container from '@/components/Container';

export default function Faq({ locale }) {
  const t = getTranslations(locale);
  const fs = require('fs');
  const dataFile = `./data/faq/${locale}.json`;
  const content = JSON.parse((fs.readFileSync(dataFile)).toString());

  return (
    <Page>
      <Section>
        <Container className="prose proese-briefe">
          <h1>{t('faq.title')}</h1>
          {content.categories.map((category) => (
            <div key={category.title}>
              <h2>{category.title}</h2>
              <ol>
                {category.questions.map((question) => (
                  <li key={question.question}>
                    <h3>{question.question}</h3>
                    <p>{question.answer}</p>
                    { question.items && (
                    <ul>
                      { question.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </Container>
      </Section>
    </Page>
  );
}
