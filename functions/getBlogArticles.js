/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable global-require */

import en from '../data/blog/en.json';
import de from '../data/blog/de.json';
import fr from '../data/blog/fr.json';
import it from '../data/blog/it.json';
import es from '../data/blog/es.json';
import pt from '../data/blog/pt.json';
import nl from '../data/blog/nl.json';

const data = {
  en,
  de,
  fr,
  it,
  es,
  pt,
  nl,
};

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
