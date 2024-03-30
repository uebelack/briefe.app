import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';
import getBlogArticles from '@/functions/getBlogArticles';

export async function getStaticProps({ locale }) {
  const articles = await getBlogArticles(locale, 3);
  return { props: { articles } };
}

function BlogLayout({
  title, articles, children, components,
}) {
  return (
    <MDXProvider components={components}>
      <Header title={title} />
      <Section className="blog">
        <Container className="prose proese-briefe">{children}</Container>
      </Section>
      <Blog articles={articles} />
      <Footer />
    </MDXProvider>
  );
}

export default BlogLayout;
