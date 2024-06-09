import React from 'react';
import getTranslations from '@/functions/getTranslations';
import CookieConsentClient from './CookieConsentClient';

export default function CookieConsent({ children }) {
  const t = getTranslations();
  return (
    <CookieConsentClient
      acceptButtonText={t('cookie_consent.accept')}
      detailsText={t('cookie_consent.message')}
      privacyLink={t('footer.privacy_link')}
      privacyLinkText={t('footer.privacy')}
    >
      {children}
    </CookieConsentClient>
  );
}
