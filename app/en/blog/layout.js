import React from 'react';
import { getTranslations } from 'next-intl/server';
import Layout from '@/components/Layout';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

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
