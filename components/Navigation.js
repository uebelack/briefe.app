import React from 'react';
import getTranslations from '@/functions/getTranslations';
import NavigationClient from './NavigationClient';
import getBlogArticles from '@/functions/getBlogArticles';

export default function Navigation({ locale }) {
  const t = getTranslations(locale);
  const showBlog = getBlogArticles(locale, 3) !== undefined;
  return (
    <NavigationClient
      language={t('common.language')}
      locale={locale}
      title={t('common.title')}
      details={t('details.title')}
      features={t('features.title')}
      blog={t('blog.menu')}
      contact={t('contact.title')}
      faq={t('faq.menu')}
      help={t('help.menu')}
      helpLink={t('help.link')}
      download={t('common.download')}
      showBlog={showBlog}
    />
  );
}
