import React from 'react';
import Page from '@/components/Page';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CallToAction from '@/components/CallToAction';

const LOCALE = 'es';

export default function TemplatesLayout({ children }) {
  return (
    <Page>
      <Section className="blog">
        <Container className="prose proese-briefe">{children}</Container>
        <CallToAction locale={LOCALE} />
      </Section>
    </Page>
  );
}
