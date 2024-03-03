/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { URL } from 'url';
import config from '../next.config.js';

const LAST_MODIFIED = new Date().toISOString();
const DOMAIN = 'https://letter-app.com';
const DE_DOMAIN = 'https://briefe.app';
const DIRNAME = new URL('.', import.meta.url).pathname;
const LANGUAGES = config.i18n.locales.filter((locale) => locale !== config.i18n.defaultLocale);

const PAGES = [
  {
    url: '/',
    alternates: [
      { lang: 'de', url: '/de' },
      { lang: 'fr', url: '/fr' },
      { lang: 'es', url: '/es' },
      { lang: 'it', url: '/it' },
      { lang: 'nl', url: '/nl' },
      { lang: 'pt', url: '/pt' },
    ],
  },
  { url: '/imprint', alternates: [{ lang: 'de', url: '/de/impressum' }] },
  { url: '/privacy', alternates: [{ lang: 'de', url: '/de/datenschutz' }] },
  {
    url: '/faq',
    alternates: LANGUAGES.map((language) => ({ lang: language, url: `/${language}/faq` })),
  },
  {
    url: '/help',
    alternates: LANGUAGES.map((language) => ({ lang: language, url: `/${language}/help` })),
  },
];

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
        <lastmod>${LAST_MODIFIED}</lastmod>${page.alternates.map((alternate) => `
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
