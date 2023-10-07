/* istanbul ignore file */
import flat from 'flat';

import en from './en';
import de from './de';
import fr from './fr';
import es from './es';
import nl from './nl';
import pt from './pt';

const messages = {
  de: flat(de),
  en: flat(en),
  fr: flat(fr),
  es: flat(es),
  nl: flat(nl),
  pt: flat(pt),
};

export default messages;
