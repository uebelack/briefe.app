/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable global-require */
const AVAILABLE_LOCALES = ['en'];

async function getBlogArticles(locale, limit = undefined) {
  const fs = require('fs');
  const { promises: { readFile } } = fs;

  const content = (await readFile(`./data/blog/${AVAILABLE_LOCALES.indexOf(locale) !== -1 ? locale : 'en'}.json`)).toString();

  let articles = JSON.parse(content);

  if (limit) {
    const randomArticles = [];
    for (let i = 0; i < limit; i++) {
      const randomIndex = Math.floor(Math.random() * articles.length);
      randomArticles.push(articles[randomIndex]);
      articles = articles.filter((_, index) => index !== randomIndex);
    }
    articles = randomArticles;
  }

  return articles;
}

export default getBlogArticles;
