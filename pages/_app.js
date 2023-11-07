/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import CookieConsent from '@/components/CookieConsent';
import '@fontsource/lexend/300.css';
import '../styles/output.css';
import messages from '../i18n';

const selectLanguage = (locale) => {
  if (locale) {
    const language = Object.keys(messages).find((key) => locale.startsWith(key));
    if (language) {
      return language;
    }
  }

  return 'en';
};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  const language = selectLanguage(locale);

  return (
    <IntlProvider
      locale={language}
      defaultLocale="en"
      messages={(messages)[language]}
    >
      <CookieConsent>
        <Component {...pageProps} />
      </CookieConsent>
    </IntlProvider>
  );
}
