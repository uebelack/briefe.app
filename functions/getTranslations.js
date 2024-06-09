import flatten from '@stdlib/utils-flatten-object';
import getLocale from './getLocale';

import en from '../messages/en.json';
import de from '../messages/de.json';
import es from '../messages/es.json';
import fr from '../messages/fr.json';
import it from '../messages/it.json';
import nl from '../messages/nl.json';
import pt from '../messages/pt.json';

const messages = {
  en: flatten(en),
  de: flatten(de),
  es: flatten(es),
  fr: flatten(fr),
  it: flatten(it),
  nl: flatten(nl),
  pt: flatten(pt),
};

function translate(key, locale) {
  return messages[locale][key];
}

export default function getTranslations(locale = getLocale()) {
  return (key) => translate(key, locale);
}
