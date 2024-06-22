import React from 'react';
import CallToActionClient from './CallToActionClient';
import getTranslations from '@/functions/getTranslations';

export default function CallToAction({ locale }) {
  const t = getTranslations(locale);
  return (
    <CallToActionClient text={t('call_to_action.text')} />
  );
}
