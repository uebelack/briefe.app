/* eslint-disable global-require */
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Page from '@/components/Page';
import Section from '@/components/Section';
import Container from '@/components/Container';

export default function Help() {
  const t = useTranslations();

  return (
    <Page>
      <Section>
        <Container className="prose proese-briefe">
          <h1>{t('help.title')}</h1>
          <h2>{t('help.how_to_title')}</h2>
          <div className="help-block">
            <div className="help-text">
              {t('help.how_to_001')}
            </div>
            <div className="help-image">
              <Image src="/help/iphone_001.png" alt="Letter logo" width={393} height={852} />
            </div>
          </div>
          <div className="help-block">
            <div className="help-text">
              {t('help.how_to_002')}
            </div>
            <div className="help-image">
              <Image src="/help/iphone_002.png" alt="Letter logo" width={393} height={852} />
            </div>
          </div>
          <div className="help-block">
            <div className="help-text">
              {t('help.how_to_003')}
            </div>
            <div className="help-image">
              <Image src="/help/iphone_003.png" alt="Letter logo" width={393} height={852} />
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
