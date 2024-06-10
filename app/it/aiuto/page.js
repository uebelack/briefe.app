import React from 'react';
import Help from '@/components/Help';

export function generateMetadata() {
  return {
    title: 'Aiuto | App Lettere',
  };
}

export default function HelpPage() {
  return <Help locale="it" />;
}
