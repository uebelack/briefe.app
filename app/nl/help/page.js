import React from 'react';
import Help from '@/components/Help';

export function generateMetadata() {
  return {
    title: 'Help | Brieven App',
  };
}

export default function HelpPage() {
  return <Help locale="nl" />;
}
