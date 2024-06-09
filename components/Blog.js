import Image from 'next/image';
import React from 'react';
import getLocale from '@/functions/getLocale';

export default function Blog({ articles }) {
  const locale = getLocale();

  return (
    <div className="blog-list">
      {articles.map((article) => (
        <a href={`/${locale}/blog/${article.slug}`} className="blog-card" key={article.slug}>
          <div className="blog-card-image">
            <Image src={`/blog/${article.slug}.jpg`} alt={article.title} width={300} height={200} />
          </div>
          <h2>{article.title}</h2>
          <p>{article.teaser}</p>
        </a>
      ))}
    </div>
  );
}
