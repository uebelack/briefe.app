import React from 'react';
import Faq from '@/components/Faq';

export function generateMetadata() {
  return {
    title: 'Domande frequenti | App Lettere',
  };
}

export default function FaqPage() {
  return <Faq locale="it" />;
}
