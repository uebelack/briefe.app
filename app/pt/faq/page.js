import React from 'react';
import Faq from '@/components/Faq';

export async function generateMetadata() {
  return {
    title: 'Frequently asked questions | Letter App',
  };
}

export default function FaqPage() {
  return <Faq locale="pt" />;
}
