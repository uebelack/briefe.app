import React from 'react';
import Help from '@/components/Help';

export function generateMetadata() {
  return {
    title: 'Ayuda | Aplicación de Cartas',
  };
}

export default function HelpPage() {
  return <Help locale="es" />;
}
