import React from 'react';
import Help from '@/components/Help';

export function generateMetadata() {
  return {
    title: 'Help | Letter App',
  };
}
export default function HelpPage() {
  return <Help locale="en" />;
}
