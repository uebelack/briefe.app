import Image from 'next/image';
import React from 'react';

export default function Blog({ articles }) {
  return (
    <div className="blog-list">
      {articles.map((article) => (
        <a href={`/blog/${article.slug}`} className="blog-card" key={article.slug}>
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
