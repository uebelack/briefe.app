'use client';

/* eslint-disable react/no-danger */

import React from 'react';
import { useCookieConsent } from './CookieConsentProvider';

export default function GoogleTagManager() {
  const cookiesAccess = useCookieConsent();
  if (typeof window !== 'undefined' && cookiesAccess) {
    return (
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
    );
  }
  return null;
}
