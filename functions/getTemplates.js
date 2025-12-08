import en from '../data/templates/en.json';
import de from '../data/templates/de.json';
import fr from '../data/templates/fr.json';
import it from '../data/templates/it.json';
import es from '../data/templates/es.json';
import pt from '../data/templates/pt.json';
import nl from '../data/templates/nl.json';

const data = { en, de, fr, it, es, pt, nl };

function slugify(uuid) {
  return uuid.toLowerCase().replace(/_/g, '-');
}

function createTeaser(text) {
  const plain = text.replace(/\n/g, ' ');
  return plain.split(' ').slice(0, 20).join(' ') + (plain.split(' ').length > 20 ? '...' : '');
}

export default function getTemplates(locale) {
  if (!data[locale]) {
    return undefined;
  }
  return data[locale].map((tpl) => ({
    ...tpl,
    slug: slugify(tpl.uuid),
    teaser: createTeaser(tpl.text),
  }));
}
