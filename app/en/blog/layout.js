import React from 'react';
import Page from '@/components/Page';
import Section from '@/components/Section';
import Container from '@/components/Container';

export default function BlogLayout({ children }) {
  return (
    <Page>
      <Section className="blog">
        <Container className="prose proese-briefe">{children}</Container>
      </Section>
    </Page>
  );
}
