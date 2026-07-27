// User manual content for the Help page, localized per language.
//
// Each locale lives in its own file under ./manual/. The English file
// (./manual/en.js) is the source of truth and documents the content schema.
// The Help component renders manual[locale] and falls back to English.

import en from "./manual/en";
import de from "./manual/de";
import es from "./manual/es";
import fr from "./manual/fr";
import it from "./manual/it";
import nl from "./manual/nl";
import pt from "./manual/pt";

const manual = { en, de, es, fr, it, nl, pt };

export default manual;
