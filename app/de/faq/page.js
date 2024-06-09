import React from 'react';
import Faq from '@/components/Faq';

export async function generateMetadata() {
  return {
    title: 'Häufig gestellte Fragen | Briefe App',
  };
}

export default function FaqPage() {
  return <Faq locale="de" />;
}
