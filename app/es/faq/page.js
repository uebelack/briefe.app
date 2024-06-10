import React from 'react';
import Faq from '@/components/Faq';

export function generateMetadata() {
  return {
    title: 'Preguntas más frecuentes | Aplicación de Cartas',
  };
}

export default function FaqPage() {
  return <Faq locale="es" />;
}
