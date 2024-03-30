/* eslint-disable global-require */
import React from 'react';
import Page from '@/components/Page';
import Section from '@/components/Section';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Blog from '@/components/Blog';
import getBlogArticles from '@/functions/getBlogArticles';

export async function getStaticProps({ locale }) {
  const articles = await getBlogArticles(locale);
  return { props: { articles } };
}

export default function BlogPage({ articles }) {
  return (
    <Page>
      <Header title="Blog - Thoughts, stories and ideas" />
      <Section>
        <Container className="prose proese-briefe">
          <h1>Blog - Thoughts, stories and ideas</h1>
          <Blog articles={articles} />
        </Container>
      </Section>
      <Footer />
    </Page>
  );
}
