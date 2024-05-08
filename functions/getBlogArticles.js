/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable global-require */

function getBlogArticles(locale, limit = undefined) {
  const fs = require('fs');

  const dataFile = `./data/blog/${locale}.json`;

  if (fs.existsSync(dataFile)) {
    const content = (fs.readFileSync(dataFile)).toString();

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

  return undefined;
}

export default getBlogArticles;
