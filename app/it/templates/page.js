import React from 'react';
import Templates from '@/components/Templates';
import getTemplates from '@/functions/getTemplates';

export function generateMetadata() {
  return {
    title: 'Templates | Letter App',
  };
}

export default function TemplatesPage() {
  const templates = getTemplates('it');
  return <Templates templates={templates} locale="it" />;
}
