import React from 'react';
import Layout from '@/components/Layout';
import getTranslations from '@/functions/getTranslations';

const LOCALE = 'it';

export async function generateMetadata() {
  const t = getTranslations(LOCALE);

  return {
    title: t('common.title_long'),
    description: t('details.p1'),
  };
}

export default function RootLayout({ children }) {
  return (
    <Layout locale={LOCALE}>
      {children}
    </Layout>
  );
}
