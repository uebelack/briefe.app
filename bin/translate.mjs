/* eslint-disable no-param-reassign */
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

async function translateArray(values, language, result = [], index = 0) {
  if (index === values.length) {
    return result;
  }

  const valueToTranslate = values[index];
  let translatedValue;

  if (typeof valueToTranslate === 'string') {
    translatedValue = result.length > index ? result[index] : await translateString(valueToTranslate, language);
  } else if (valueToTranslate instanceof Array) {
    translatedValue = await translateArray(valueToTranslate, language, result[index]);
  } else if (valueToTranslate instanceof Object) {
    translatedValue = await translateObject(valueToTranslate, language, result[index]);
  } else {
    translatedValue = valueToTranslate;
  }

  if (result.length > index) {
    result[index] = translatedValue;
  } else {
    result.push(translatedValue);
  }

  return translateArray(values, language, result, index + 1);
}

async function translateObject(value, language, result = {}, index = 0) {
  const keys = Object.keys(value);
  if (index === keys.length) {
    return result;
  }

  const key = keys[index];
  const valueToTranslate = value[key];
  let translatedValue;

  if (typeof valueToTranslate === 'string') {
    translatedValue = result[key] || await translateString(valueToTranslate, language);
  } else if (valueToTranslate instanceof Array) {
    translatedValue = await translateArray(valueToTranslate, language, result[key]);
  } else if (valueToTranslate instanceof Object) {
    translatedValue = await translateObject(valueToTranslate, language, result[key]);
  } else {
    translatedValue = valueToTranslate;
  }

  return translateObject(value, language, { ...result, [key]: translatedValue }, index + 1);
}

async function translateFAQ(index = 0) {
  if (index === LANGUAGES.length) {
    return;
  }
  const language = LANGUAGES[index];
  const result = JSON.parse(fs.readFileSync(path.resolve(path.join(DIRNAME, `../data/faq/${language}.json`)), 'utf8'));
  const translatedFAQ = await translateObject(faq, language, result);
  const faqPath = path.resolve(path.join(DIRNAME, `../data/faq/${language}.json`));
  fs.writeFileSync(faqPath, JSON.stringify(translatedFAQ, null, 2), 'utf8');

  translateFAQ(index + 1);
}

translateFAQ();
