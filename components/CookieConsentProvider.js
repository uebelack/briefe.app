'use client';

import React, { useEffect, useState } from 'react';
import { getCookieConsentValue } from 'react-cookie-consent';

const CookieContext = React.createContext(getCookieConsentValue('briefe_app_cookie_consent') === 'true');

export function useCookieConsent() {
  return React.useContext(CookieContext);
}

export default function CookieConsentProvider({
  children,
}) {
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);
  useEffect(() => setCookieConsentAccepted(getCookieConsentValue('briefe_app_cookie_consent') === 'true'), []);

  return (
    <CookieContext.Provider value={cookieConsentAccepted}>
      {children}
    </CookieContext.Provider>
  );
}
