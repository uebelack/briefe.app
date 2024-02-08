/* eslint-disable global-require */
import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Page from '@/components/Page';
import Section from '@/components/Section';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

export default function Help() {
  const { formatMessage } = useIntl();

  return (
    <Page>
      <Header title={formatMessage({ id: 'help.title' })} />
      <Section>
        <Container className="prose proese-briefe">
          <h1><FormattedMessage id="help.title" /></h1>
          <h2><FormattedMessage id="help.how_to_title" /></h2>
          <div className="help-block">
            <div className="help-text">
              <FormattedMessage id="help.how_to_001" />
            </div>
            <div className="help-image">
              <Image src="/help/iphone_001.png" alt="Letter logo" width={393} height={852} />
            </div>
          </div>
          <div className="help-block">
            <div className="help-text">
              <FormattedMessage id="help.how_to_002" />
            </div>
            <div className="help-image">
              <Image src="/help/iphone_002.png" alt="Letter logo" width={393} height={852} />
            </div>
          </div>
          <div className="help-block">
            <div className="help-text">
              <FormattedMessage id="help.how_to_003" />
            </div>
            <div className="help-image">
              <Image src="/help/iphone_003.png" alt="Letter logo" width={393} height={852} />
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </Page>
  );
}
