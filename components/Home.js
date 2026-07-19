import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import getTranslations from "@/functions/getTranslations";
import Feature from "./Feature";
import features from "@/data/features";
import Page from "./Page";
import ScrollButton from "./ScrollButton";
import Reveal from "./Reveal";
import Blog from "./Blog";
import getBlogArticles from "@/functions/getBlogArticles";
import ContactForm from "./ContactForm";

function StoreBadges() {
  return (
    <div className="store-badges">
      <a className="store-badge" href="http://itunes.apple.com/app/letter/id498506154">
        <Image src="/app_store_en.svg" alt="Download on the App Store" width={156} height={52} />
      </a>
      <a
        className="store-badge"
        href="https://play.google.com/store/apps/details?id=dev.uebelacker.letter"
      >
        <Image src="/play_store_en.svg" alt="Get it on Google Play" width={176} height={52} />
      </a>
    </div>
  );
}

export default function Home({ locale }) {
  const t = getTranslations(locale);

  const featuresKey =
    Object.keys(features).find((key) => key.startsWith(locale ?? "en-US")) ?? "en-US";
  const featureData = features[featuresKey];
  const articles = getBlogArticles(locale, 6);
  const deviceLocale = locale?.startsWith("de") ? "de" : "en";

  // Strip the "Letter App - " brand prefix for a cleaner editorial headline.
  const titleLong = t("common.title_long");
  const detailHeadline = titleLong?.includes(" - ")
    ? titleLong.split(" - ").slice(1).join(" - ")
    : titleLong;

  return (
    <Page>
      {/* ---- Hero ---- */}
      <section className="hero">
        <div className="wrap">
          <Reveal className="hero-eyebrow" as="p">
            <span className="eyebrow">{t("common.title")}</span>
          </Reveal>
          <Reveal as="h1" className="display" delay={60}>
            {t("home.teaser")}
          </Reveal>
          <Reveal as="p" className="lead hero-sub" delay={120}>
            {featureData.edit}
          </Reveal>
          <Reveal className="hero-actions" delay={180}>
            <StoreBadges />
          </Reveal>
          <Reveal className="hero-device" delay={240}>
            <Image
              src={`/devices_${deviceLocale}.png`}
              alt="Letter app on Mac, iPad and iPhone"
              width={992}
              height={605}
              priority
              unoptimized
            />
          </Reveal>
        </div>
        <ScrollButton label={t("common.scroll_down")} target="details" />
      </section>

      {/* ---- Details ---- */}
      <section id="details" className="sec">
        <div className="wrap">
          <div className="detail-grid">
            <Reveal className="detail-copy">
              <p className="eyebrow">{t("details.title")}</p>
              <h2 className="headline" style={{ marginTop: 12 }}>
                {detailHeadline}
              </h2>
              <p className="body-text">{t("details.p1")}</p>
              <p className="body-text">{t("details.p2")}</p>
            </Reveal>
            <Reveal className="detail-media" delay={100}>
              <Image
                src={`/details_${deviceLocale}.png`}
                alt="Letter app editor"
                width={451}
                height={900}
                unoptimized
              />
            </Reveal>
          </div>

          {/* PRO callout */}
          <Reveal className="pro-callout">
            <span className="pro-badge">
              <Sparkles size={14} strokeWidth={2.25} /> PRO
            </span>
            <h3 className="title-2" style={{ marginTop: 16, marginBottom: 8 }}>
              {t("details.pro_title")}
            </h3>
            <p className="body-text">{t("details.p3")}</p>
            <p className="body-text">{t("details.p4")}</p>
            <p className="body-text">{t("details.p5")}</p>
          </Reveal>
        </div>
      </section>

      {/* ---- Features ---- */}
      <section id="features" className="sec divide-top">
        <div className="wrap">
          <Reveal>
            <h2 className="headline">{t("features.title")}</h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: "58ch" }}>
              {t("features.description")}
            </p>
          </Reveal>

          <div className="feature-groups">
            <Reveal>
              <div className="feature-group-title">{featureData.features.title}</div>
              {featureData.features.features.map((feature) => (
                <Feature
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </Reveal>
            <Reveal delay={80}>
              <div className="feature-group-title">
                <Sparkles size={14} strokeWidth={2.25} style={{ color: "var(--brand)" }} />
                {featureData.proFeatures.title}
              </div>
              {featureData.proFeatures.features.map((feature) => (
                <Feature
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </Reveal>
          </div>

          <div className="feature-note">{t("common.android_only")}</div>
          <div className="feature-note">{t("common.ios_only")}</div>

          <Reveal style={{ marginTop: 40 }}>
            <StoreBadges />
          </Reveal>
        </div>
      </section>

      {/* ---- Blog ---- */}
      {articles && (
        <section id="blog" className="sec divide-top">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Blog</p>
              <h2 className="headline" style={{ marginTop: 12, marginBottom: 40 }}>
                {t("blog.title")}
              </h2>
            </Reveal>
            <Reveal>
              <Blog articles={articles} locale={locale} />
            </Reveal>
          </div>
        </section>
      )}

      {/* ---- Contact ---- */}
      <section id="contact" className="sec divide-top">
        <div className="wrap">
          <Reveal style={{ textAlign: "center" }}>
            <h2 className="headline">{t("contact.title")}</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              {t("contact.subtitle")}
            </p>
          </Reveal>
          <Reveal className="contact-card" style={{ marginTop: 40 }}>
            <ContactForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
