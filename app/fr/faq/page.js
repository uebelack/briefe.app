import React from 'react';
import Faq from '@/components/Faq';

export function generateMetadata() {
  return {
    title: 'Questions fréquemment posées | Application de Lettres',
  };
}

export default function FaqPage() {
  return <Faq locale="fr" />;
}
