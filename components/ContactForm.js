import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import ContactFormClient from './ContactFormClient';

export default function CookieConsent() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <ContactFormClient
      privacyLink={t('contact.privacy_link')}
      locale={locale}
      emailError={t('contact.email_error')}
      subjectError={t('contact.subject_error')}
      messageError={t('contact.message_error')}
      privacyError={t('contact.privacy_error')}
      cookie={t('contact.cookie')}
      emailPlaceholder={t('contact.email_placeholder')}
      subjectPlaceholder={t('contact.subject_placeholder')}
      messagePlaceholder={t('contact.message_placeholder')}
      privacy1={t('contact.privacy_1')}
      privacy2={t('contact.privacy_2')}
      submit={t('contact.submit')}
      success={t('contact.success')}
      error={t('contact.error')}
    />
  );
}
