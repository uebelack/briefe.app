'use client';

import React, { useEffect, useState } from 'react';
import ReactCookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

export default function CookieConsentClient({
  acceptButtonText,
  detailsText,
  privacyLink,
  privacyLinkText,
}) {
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);
  useEffect(() => setCookieConsentAccepted(getCookieConsentValue('briefe_app_cookie_consent') === 'true'), []);

  return !cookieConsentAccepted ? (
    <ReactCookieConsent
      location="bottom"
      buttonText={acceptButtonText}
      cookieName="briefe_app_cookie_consent"
      onAccept={() => setCookieConsentAccepted(true)}
    >
      {detailsText}
      {' '}
      <a href={privacyLink} className="underline underline-offset-2">{privacyLinkText}</a>
      .
    </ReactCookieConsent>

  ) : null;
}
