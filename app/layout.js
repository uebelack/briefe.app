import React from 'react';
import Layout from '@/components/Layout';
import getTranslations from '@/functions/getTranslations';

export async function generateMetadata() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = getTranslations();

  return {
    title: t('common.title_long'),
    description: t('details.p1'),
  };
}

export default function RootLayout({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
