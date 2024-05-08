import React from 'react';
import Faq from '@/components/Faq';

export async function generateMetadata() {
  return {
    title: 'Preguntas más frecuentes | Aplicación de Cartas',
  };
}

export default function FaqPage() {
  return <Faq />;
}
