/* eslint-disable global-require */
import React from "react";
import Image from "next/image";
import getTranslations from "@/functions/getTranslations";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Container from "@/components/Container";

export default function Help({ locale }) {
  const t = getTranslations(locale);

  return (
    <Page>
      <Section>
        <Container>
          <div className="help-wrap">
            <p className="eyebrow">{t("help.menu")}</p>
            <h1 className="headline" style={{ marginTop: 10 }}>
              {t("help.how_to_title")}
            </h1>

            <div className="help-steps">
              {[1, 2, 3].map((n) => (
                <div className="help-block" key={n}>
                  <div className="help-text">
                    <span className="help-step-num">{n}</span>
                    {t(`help.how_to_00${n}`)}
                  </div>
                  <div className="help-image">
                    <Image
                      src={`/help/iphone_00${n}.png`}
                      alt={`Step ${n}`}
                      width={393}
                      height={852}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
