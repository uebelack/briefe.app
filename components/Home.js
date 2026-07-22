import React from "react";
import Image from "next/image";
import HeroBadge from "./HeroBadge";
import HeroLetter from "./HeroLetter";
import getTranslations from "@/functions/getTranslations";
import Container from "./Container";
import Feature from "./Feature";
import features from "@/data/features";
import Heading from "./Heading";
import Page from "./Page";
import Section from "./Section";
import Blog from "./Blog";
import PhoneScreenshot from "./PhoneScreenshot";
import getBlogArticles from "@/functions/getBlogArticles";
import ContactForm from "./ContactForm";

function StoreBadges() {
  return (
    <div className="store-badges">
      <a
        className="store-badge"
        href="http://itunes.apple.com/app/letter/id498506154"
        aria-label="Download on the App Store"
      >
        <Image src="/app_store_en.svg" alt="App Store" width={150} height={50} />
      </a>
      <a
        className="store-badge"
        href="https://play.google.com/store/apps/details?id=dev.uebelacker.letter"
        aria-label="Get it on Google Play"
      >
        <Image src="/play_store_en.svg" alt="Google Play" width={150} height={50} />
      </a>
    </div>
  );
}

export default function Home({ locale, android }) {
  const t = getTranslations(locale);

  const featuresKey =
    Object.keys(features).find((key) => key.startsWith(locale ?? "en-US")) ?? "en-US";
  const featureData = features[featuresKey];
  const articles = getBlogArticles(locale);

  return (
    <Page>
      <Section className="hero first">
        <Container>
          <div className="hero-inner">
            <HeroBadge label={t("home.badge")} target="pro" />
            <h1 className="hero-title">{t("home.teaser")}</h1>
            <p className="hero-sub">{featureData.edit}</p>
            <div className="hero-actions">
              <StoreBadges />
            </div>
            <p className="hero-platforms">iPhone · iPad · Mac · Android</p>
            <HeroLetter
              locale={locale}
              subject={t("home.hero_subject")}
              letterText={t("home.hero_letter")}
            />
          </div>
        </Container>
      </Section>

      <Section className="sec">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            <div className="prose">
              <Heading id="details">{t("details.title")}</Heading>
              <p>{t("details.p1")}</p>
              <p>{t("details.p2")}</p>
            </div>
            <div className="details-media shrink-0 mx-auto">
              <PhoneScreenshot
                name="detail"
                locale={locale}
                android={android}
                alt="Letter app editor"
                width={260}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse lg:items-start gap-10 lg:gap-16 mt-16 lg:mt-24">
            <div className="prose">
              <Heading level={2} id="pro">
                {t("details.pro_title")}
              </Heading>
              <p>{t("details.p3")}</p>
              <p>{t("details.p4")}</p>
              <p>{t("details.p5")}</p>
            </div>
            <div className="details-media shrink-0 mx-auto">
              <PhoneScreenshot
                name="ai"
                locale={locale}
                android={android}
                alt="AI-powered letter assistant"
                width={260}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="sec sec-panel">
        <Container>
          <Heading id="features">{t("features.title")}</Heading>
          <p className="text-[var(--ink-muted)] max-w-2xl mb-10">{t("features.description")}</p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <h3 className="feature-col-title">{featureData.features.title}</h3>
              <div className="flex flex-col gap-1">
                {featureData.features.features.map((feature) => (
                  <Feature
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="feature-col-title pro">{featureData.proFeatures.title}</h3>
              <div className="flex flex-col gap-1">
                {featureData.proFeatures.features.map((feature) => (
                  <Feature
                    key={feature.title}
                    pro
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="feature-note mt-8">{t("common.android_only")}</div>
          <div className="feature-note">{t("common.ios_only")}</div>
          <div className="flex justify-center mt-12">
            <StoreBadges />
          </div>
        </Container>
      </Section>

      {articles && (
        <Section className="sec">
          <Container>
            <Heading id="blog">{t("blog.title")}</Heading>
            <div className="mt-8">
              <Blog articles={articles.slice(0, 6)} locale={locale} />
            </div>
            <div className="blog-more">
              <a className="blog-more-link" href={`/${locale}/blog`}>
                {t("blog.view_all")}
              </a>
            </div>
          </Container>
        </Section>
      )}

      <Section className="sec">
        <Container>
          <Heading id="screenshots">{t("screenshots.title")}</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 justify-items-center mt-10">
            {["overview", "edit", "detail", "ai"].map((shot) => (
              <PhoneScreenshot
                key={shot}
                name={shot}
                locale={locale}
                android={android}
                alt={`Letter app ${shot} screen`}
                width={240}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="sec">
        <Container>
          <div className="flex flex-col items-center">
            <div className="w-full md:w-9/12">
              <Heading id="contact">{t("contact.title")}</Heading>
              <p className="text-[var(--ink-muted)] mb-8">{t("contact.subtitle")}</p>
              <ContactForm locale={locale} />
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
