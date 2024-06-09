import React from 'react';
import getLocale from '@/functions/getLocale';
import CookieConsentProvider from '@/components/CookieConsentProvider';
import GoogleTagManager from '@/components/GoogleTagManager';
import CookieConsent from '@/components/CookieConsent';
import Navigation from '@/components/Navigation';
import '@fontsource/lexend/300.css';

import '../styles/output.css';
import Footer from '@/components/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0080FC',
};

export default function RootLayout({ children }) {
  const locale = getLocale();
  console.log('------->', locale);
  return (
    <CookieConsentProvider>
      <html lang={locale}>
        <head>
          <meta name="apple-itunes-app" content="app-id=498506154" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <GoogleTagManager />
        </head>
        <body>
          <Navigation />
          {children}
          <Footer />
          <CookieConsent />
        </body>
      </html>
    </CookieConsentProvider>
  );
}
