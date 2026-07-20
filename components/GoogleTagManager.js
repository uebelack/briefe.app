"use client";

import React from "react";
import Script from "next/script";
import { useCookieConsent } from "./CookieConsentProvider";

export default function GoogleTagManager() {
  const cookiesAccess = useCookieConsent();
  const key = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

  if (!cookiesAccess || !key) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${key}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${key}', { 'anonymize_ip': true });
        `}
      </Script>
    </>
  );
}
