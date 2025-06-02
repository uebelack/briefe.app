import React from 'react';
import Templates from '@/components/Templates';
import getTemplates from '@/functions/getTemplates';

export function generateMetadata() {
  return {
    title: 'Templates | Letter App',
  };
}

export default function TemplatesPage() {
  const templates = getTemplates('pt');
  return <Templates templates={templates} locale="pt" />;
}
