/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { URL } from 'url';

const LAST_MODIFIED = new Date().toISOString();
const DOMAIN = 'https://letter-app.com';
const DE_DOMAIN = 'https://briefe.app';
const DIRNAME = new URL('.', import.meta.url).pathname;
const LANGUAGES = ['de', 'fr', 'es', 'it', 'nl', 'pt'];

const PAGES = [
  {
    url: '/en',
    alternates: [
      { lang: 'de', url: '/de' },
      { lang: 'fr', url: '/fr' },
      { lang: 'es', url: '/es' },
      { lang: 'it', url: '/it' },
      { lang: 'nl', url: '/nl' },
      { lang: 'pt', url: '/pt' },
    ],
  },
  {
    url: '/en/imprint',
    alternates: [
      { lang: 'de', url: '/de/impressum' },
      { lang: 'fr', url: '/fr/imprint' },
      { lang: 'es', url: '/es/imprint' },
      { lang: 'it', url: '/it/imprint' },
      { lang: 'nl', url: '/nl/imprint' },
      { lang: 'pt', url: '/pt/imprint' },
    ],
  },
  {
    url: '/en/privacy',
    alternates: [
      { lang: 'de', url: '/de/datenschutz' },
      { lang: 'fr', url: '/fr/privacy' },
      { lang: 'es', url: '/es/privacy' },
      { lang: 'it', url: '/it/privacy' },
      { lang: 'nl', url: '/nl/privacy' },
      { lang: 'pt', url: '/pt/privacy' },
    ],
  },
  {
    url: '/en/help',
    alternates: [
      { lang: 'de', url: '/de/hilfe' },
      { lang: 'fr', url: '/fr/aide' },
      { lang: 'es', url: '/es/ayuda' },
      { lang: 'it', url: '/it/aiuto' },
      { lang: 'nl', url: '/nl/help' },
      { lang: 'pt', url: '/pt/ajuda' },
    ],
  },
  {
    url: '/en/faq',
    alternates: LANGUAGES.map((language) => ({ lang: language, url: `/${language}/faq` })),
  },
];

const blogArticles = {
  en: JSON.parse(fs.readFileSync('./data/blog/en.json', 'utf8')),
};

LANGUAGES.forEach((language) => {
  blogArticles[language] = JSON.parse(fs.readFileSync(`./data/blog/${language}.json`, 'utf8'));
});

blogArticles.en.forEach((article) => {
  const alternates = LANGUAGES.map((language) => ({
    lang: language,
    url: `/${language}/blog/${blogArticles[language].find((a) => a.key === article.key).slug}`,
  }));

  PAGES.push({
    url: `/en/blog/${article.slug}`,
    alternates,
  });
});

const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${PAGES.map((page) => `
      <url>
        <loc>${DOMAIN}${page.url}</loc>
        <lastmod>${LAST_MODIFIED}</lastmod>${page.alternates?.map((alternate) => `
        <xhtml:link
          rel="alternate"
          hreflang="${alternate.lang}"
          href="${alternate.lang === 'de' ? DE_DOMAIN : DOMAIN}${alternate.url}"/>
        `).join('\n')}
      </url>
    `).join('\n')}
    </urlset>
`;

prettier.format(sitemap, { parser: 'html' }).then((formattedSitemap) => {
  fs.writeFileSync(path.resolve(path.join(DIRNAME, '../public/sitemap.xml')), formattedSitemap, 'utf8');
});
