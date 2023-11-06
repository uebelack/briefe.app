import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Page from '@/components/Page';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Typist from 'react-typist-component';
import ScrollButton from '@/components/ScrollButton';
import Heading from '@/components/Heading';
import ContactForm from '@/components/ContactForm';
import Feature from '@/components/Feature';
import { useRouter } from 'next/router';
import features from '../i18n/features';

export default function Home() {
  const { formatMessage } = useIntl();
  const { locale } = useRouter();

  const featuresKey = Object.keys(features).find((key) => key.startsWith(locale ?? 'en-US')) ?? 'en-US';
  const featureData = features[featuresKey];

  const language = locale?.startsWith('de') ? 'de' : 'en';
  return (
    <Page>
      <Header description={formatMessage({ id: 'details.p1' })} />
      <Section className="grid place-items-center first bg-blue text-white">
        <Container className="grid place-items-center">
          <Image src={`/devices_${language}.png`} alt="Letter app" width={992} height={605} unoptimized />
          <a href="http://itunes.apple.com/app/letter/id498506154">
            <Image src="/app_store_en.svg" alt="App Store" width={150} height={50} className="mt-5" />
          </a>
          <div className="p-3 md:w-4/5 pt-10">
            <Typist typingDelay={30}>
              <div className="text-xl md:text-3xl mb-4">
                { formatMessage({ id: 'home.teaser' }) }
              </div>
            </Typist>
          </div>
        </Container>
      </Section>
      <ScrollButton target="details" />
      <Section>
        <Container>
          <div className="flex">
            <div className="prose proese-briefe">
              <Heading id="details"><FormattedMessage id="details.title" /></Heading>
              <p>
                <FormattedMessage id="details.p1" />
              </p>
              <p>
                <FormattedMessage id="details.p2" />
              </p>
              <p>
                <FormattedMessage id="details.p3" />
              </p>
            </div>
            <div className="pt-32 ml-20 hidden lg:inline">
              <Image src={`/details_${language}.png`} alt="Letter app" width={225.5} height={450} unoptimized />
            </div>
          </div>
        </Container>
        <Container>
          <Heading id="features"><FormattedMessage id="features.title" /></Heading>
          <p><FormattedMessage id="features.description" /></p>
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
        <Container>
          <div className="flex flex-col items-center">
            <div className="w-full md:w-9/12">
              <Heading id="contact"><FormattedMessage id="contact.title" /></Heading>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </Page>
  );
}
