import React from 'react';
import Image from 'next/image';
import getLocale from '@/functions/getLocale';
import getTranslations from '@/functions/getTranslations';
import Container from './Container';
import Feature from './Feature';
import features from '@/data/features';
import Heading from './Heading';
import Page from './Page';
import ScrollButton from './ScrollButton';
import Section from './Section';
import Teaser from './Teaser';
import Blog from './Blog';
import getBlogArticles from '@/functions/getBlogArticles';
import ContactForm from './ContactForm';

export default function Home() {
  const locale = getLocale();
  const t = getTranslations();

  const featuresKey = Object.keys(features).find((key) => key.startsWith(locale ?? 'en-US')) ?? 'en-US';
  const featureData = features[featuresKey];
  const articles = getBlogArticles(locale);

  return (
    <Page>
      <Section className="grid place-items-center first bg-blue text-white">
        <Container className="grid place-items-center">
          <Image src={`/devices_${locale?.startsWith('de') ? 'de' : 'en'}.png`} alt="Letter app" width={992} height={605} unoptimized />
          <a href="http://itunes.apple.com/app/letter/id498506154">
            <Image src="/app_store_en.svg" alt="App Store" width={150} height={50} className="mt-5" />
          </a>
          <div className="p-3 md:w-4/5 pt-10">
            <Teaser text={t('home.teaser')} />
          </div>
        </Container>
      </Section>
      <ScrollButton label={t('common.scroll_down')} target="details" />
      <Section>
        <Container>
          <div className="flex">
            <div className="prose proese-briefe">
              <Heading id="details">{t('details.title')}</Heading>
              <p>
                {t('details.p1')}
              </p>
              <p>
                {t('details.p2')}
              </p>
              <p>
                {t('details.p3')}
              </p>
            </div>
            <div className="pt-32 ml-20 hidden lg:inline">
              <Image src={`/details_${locale === 'de' ? 'de' : 'en'}.png`} alt="Letter app" width={225.5} height={450} unoptimized />
            </div>
          </div>
        </Container>
        <Container>
          <Heading id="features">{t('features.title')}</Heading>
          <p>{t('features.description')}</p>
          <div className="flex flex-wrap md:flex-nowrap mt-5">
            <div className="grow mt-5 md:mr-5">
              <h3 className="text-xl font-bold mb-5">{featureData.features.title}</h3>
              {featureData.features.features.map((feature) => (
                <Feature
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <div className="grow mt-5 md:ml-5">
              <h3 className="text-xl font-bold mb-5">{featureData.proFeatures.title}</h3>
              {featureData.proFeatures.features.map((feature) => (
                <Feature
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          <div className="grid place-items-center mt-5">
            <a href="http://itunes.apple.com/app/letter/id498506154">
              <Image src="/app_store_en.svg" alt="App Store" width={150} height={50} className="mt-5" />
            </a>
          </div>
        </Container>
        { articles && (
        <Container>
          <Heading id="blog">{t('blog.title')}</Heading>
          <Blog articles={articles} />
        </Container>
        )}
        <Container>
          <div className="flex flex-col items-center">
            <div className="w-full md:w-9/12">
              <Heading id="contact">{t('contact.title')}</Heading>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
