/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Link from 'next/link';
import getTranslations from '@/functions/getTranslations';

export default function Footer({ locale }) {
  const t = getTranslations(locale);
  return (
    <footer className="md:container mt-20 mb-20 text-center">
      <div className="mb-2 px-4 my-4">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Übelacker Solutions GmbH
        <br />
        <Link href={t('footer.imprint_link')}>{t('footer.imprint')}</Link>
        {' '}
        |
        {' '}
        <Link href={t('footer.privacy_link')}>{t('footer.privacy')}</Link>
      </div>
    </footer>
  );
}
