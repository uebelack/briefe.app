/* eslint-disable global-require */
import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Page from '@/components/Page';
import Section from '@/components/Section';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

export async function getStaticProps({ locale }) {
  const fs = require('fs');
  const { promises: { readFile } } = fs;
  const content = (await readFile(`./data/faq/${locale}.json`)).toString();
  return { props: JSON.parse(content) };
}

export default function FAQ({ categories }) {
  const { formatMessage } = useIntl();

  return (
    <Page>
      <Header title={formatMessage({ id: 'faq.title' })} />
      <Section>
        <Container className="prose proese-briefe">
          <h1><FormattedMessage id="faq.title" /></h1>
          {categories.map((category) => (
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
      <Footer />
    </Page>
  );
}
