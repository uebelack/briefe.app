import React from "react";
import CookieConsentProvider from "@/components/CookieConsentProvider";
import GoogleTagManager from "@/components/GoogleTagManager";
import CookieConsent from "@/components/CookieConsent";
import Navigation from "@/components/Navigation";

import "../styles/output.css";
import Footer from "@/components/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfbfd",
};

export default function RootLayout({ children, locale }) {
  return (
    <CookieConsentProvider>
      <html lang={locale}>
        <head>
          <meta name="apple-itunes-app" content="app-id=498506154" />
          <GoogleTagManager />
        </head>
        <body>
          <Navigation locale={locale} />
          {children}
          <Footer locale={locale} />
          <CookieConsent locale={locale} />
        </body>
      </html>
    </CookieConsentProvider>
  );
}
