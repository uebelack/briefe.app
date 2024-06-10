import React from 'react';
import Faq from '@/components/Faq';

export function generateMetadata() {
  return {
    title: 'Perguntas mais frequentes | Aplicação de Cartas',
  };
}

export default function FaqPage() {
  return <Faq locale="pt" />;
}
