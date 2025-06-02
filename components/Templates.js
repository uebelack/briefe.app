import React from 'react';

export default function Templates({ templates, locale }) {
  return (
    <div className="blog-list">
      {templates.map((tpl) => (
        <a href={`/${locale}/templates/${tpl.slug}`} className="blog-card" key={tpl.slug}>
          <h2>{tpl.subject}</h2>
          <p>{tpl.teaser}</p>
        </a>
      ))}
    </div>
  );
}
