/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FormattedMessage, useIntl } from 'react-intl';
import { scroller } from 'react-scroll';
import { useCookieConsent } from './CookieConsent';
import LanguageSelect from './LanguageSelect';
import languages from '../i18n/languages';

export default function Header({ title, description }) {
  const intl = useIntl();
  const cookiesAccess = useCookieConsent();
  const handleOnClick = (e, target) => {
    if (Object.keys(languages).indexOf(window.location.pathname.substring(1)) >= 0) {
      scroller.scrollTo(target, { duration: 200, smooth: true });
      e.preventDefault();
    }
  };

  return (
    <header className="fixed top-0 w-full bg-blue text-white">
      <Head>
        <title>
          {title ? `${title} | ${intl.formatMessage({ id: 'common.title' })}` : intl.formatMessage({ id: 'common.title_long' })}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="apple-itunes-app" content="app-id=498506154" />
        <meta name="theme-color" content="#0080FC" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {description && (<meta name="description" content={description} />)}
        {typeof window !== 'undefined' && cookiesAccess && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', { 'anonymize_ip': true });
          `,
              }}
            />
          </>
        )}
      </Head>
      <div className="md:container px-4 my-4 fade-in flex flex-col md:flex-row">
        <Link href="/" className="flex items-center transition ease-in-out delay-150 flex-grow">
          <Image src="/logo.svg" alt="Letter logo" width={50} height={35} />
          <div className="text-2xl ml-2 text-white"><FormattedMessage id="common.title" /></div>
        </Link>
        <ul className="flex md:pl-1 pt-1 md:pt-1.5 ">
          <li className="mr-2"><a href="/#details" onClick={(e) => handleOnClick(e, 'details')}><FormattedMessage id="details.title" /></a></li>
          <li className="mr-2"><a href="/#features" onClick={(e) => handleOnClick(e, 'features')}><FormattedMessage id="features.title" /></a></li>
          <li className="mr-2"><a href="/#contact" onClick={(e) => handleOnClick(e, 'contact')}><FormattedMessage id="contact.title" /></a></li>
          <li>|</li>
          <li><LanguageSelect /></li>
        </ul>
      </div>
    </header>
  );
}
