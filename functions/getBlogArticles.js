/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable global-require */

import en from '../data/blog/en.json';

const data = { en };

function getBlogArticles(locale, limit = undefined) {
  if (data[locale]) {
    let articles = data[locale];

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

  return undefined;
}

export default getBlogArticles;
