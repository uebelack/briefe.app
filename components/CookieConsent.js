import React from 'react';
import { useTranslations } from 'next-intl';
import CookieConsentClient from './CookieConsentClient';

export default function CookieConsent({ children }) {
  const t = useTranslations();
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
