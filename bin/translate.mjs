/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */

import 'dotenv/config';
import * as deepl from 'deepl-node';
import fs from 'fs';
import path from 'path';
import config from '../next.config.js';

const DIRNAME = new URL('.', import.meta.url).pathname;
const LANGUAGES = config.i18n.locales.filter((locale) => locale !== config.i18n.defaultLocale);

const translator = new deepl.Translator(process.env.DEEPL_API_KEY);
const faq = JSON.parse(fs.readFileSync(path.resolve(path.join(DIRNAME, '../data/faq/en.json')), 'utf8'));

async function translateString(value, language) {
  const result = await translator.translateText(value, 'en', language === 'pt' ? 'pt-PT' : language);
  return result.text;
}

async function translateArray(values, language, index = 0, result = []) {
  if (index === values.length) {
    return result;
  }

  const value = values[index];
  let translatedValue;

  if (typeof valueToTranslate === 'string') {
    translatedValue = await translateString(value, language);
  } else if (value instanceof Array) {
    translatedValue = await translateArray(value, language);
  } else if (value instanceof Object) {
    translatedValue = await translateObject(value, language);
  } else {
    translatedValue = value;
  }

  return translateArray(values, language, index + 1, [...result, translatedValue]);
}

async function translateObject(value, language, keys = Object.keys(value), index = 0, result = {}) {
  if (index === keys.length) {
    return result;
  }

  const key = keys[index];
  const valueToTranslate = value[key];
  let translatedValue;

  if (typeof valueToTranslate === 'string') {
    translatedValue = await translateString(valueToTranslate, language);
  } else if (valueToTranslate instanceof Array) {
    translatedValue = await translateArray(valueToTranslate, language);
  } else if (valueToTranslate instanceof Object) {
    translatedValue = await translateObject(valueToTranslate, language);
  } else {
    translatedValue = valueToTranslate;
  }

  return translateObject(value, language, keys, index + 1, { ...result, [key]: translatedValue });
}

async function translateFAQ(index = 0) {
  if (index === LANGUAGES.length) {
    return;
  }
  console.log(`Translating FAQ to ${LANGUAGES[index]}`);
  const language = LANGUAGES[index];
  const translatedFAQ = await translateObject(faq, language);
  const faqPath = path.resolve(path.join(DIRNAME, `../data/faq/${language}.json`));
  fs.writeFileSync(faqPath, JSON.stringify(translatedFAQ, null, 2), 'utf8');

  translateFAQ(index + 1);
}

translateFAQ();
