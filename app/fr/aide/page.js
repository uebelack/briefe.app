import React from 'react';
import Help from '@/components/Help';

export function generateMetadata() {
  return {
    title: 'Aide | Application de Lettres',
  };
}

export default function HelpPage() {
  return <Help locale="fr" />;
}
