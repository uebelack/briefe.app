import React from 'react';
import Faq from '@/components/Faq';

export function generateMetadata() {
  return {
    title: 'Veelgestelde vragen | Brieven App',
  };
}

export default function FaqPage() {
  return <Faq locale="nl" />;
}
