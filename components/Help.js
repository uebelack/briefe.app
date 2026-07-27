import React from "react";
import Page from "@/components/Page";
import Section from "@/components/Section";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PhoneScreenshot from "@/components/PhoneScreenshot";
import manual from "@/data/manual";

// Render a small subset of inline markdown: **bold**, *italic*, and [text](url).
function renderRich(text, keyPrefix) {
  const nodes = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let match;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <a
          key={`${keyPrefix}-a${i}`}
          className="manual-link"
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[1]}
        </a>,
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-b${i}`}>{match[3]}</strong>);
    } else {
      nodes.push(<em key={`${keyPrefix}-i${i}`}>{match[4]}</em>);
    }
    last = regex.lastIndex;
    i += 1;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return nodes;
}

function Block({ block, id }) {
  switch (block.type) {
    case "p":
      return <p className="manual-p">{renderRich(block.text, id)}</p>;
    case "ul":
      return (
        <ul className="manual-list">
          {block.items.map((item, i) => (
            <li key={`${id}-li${i}`}>{renderRich(item, `${id}-li${i}`)}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="manual-steps">
          {block.items.map((item, i) => (
            <li key={`${id}-st${i}`}>
              <span className="manual-steps__num">{i + 1}</span>
              <span>{renderRich(item, `${id}-st${i}`)}</span>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div className="manual-callout manual-callout--tip">
          <span className="manual-callout__label">Tip</span>
          <p>{renderRich(block.text, id)}</p>
        </div>
      );
    case "note":
      return (
        <div className="manual-callout manual-callout--note">
          <p>{renderRich(block.text, id)}</p>
        </div>
      );
    case "table":
      return (
        <div className="manual-table-wrap">
          <table className="manual-table">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={`${id}-r${r}`}>
                  {row.map((cell, c) => (
                    <td key={`${id}-r${r}c${c}`}>{renderRich(cell, `${id}-r${r}c${c}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function ManualSection({ section, index, locale }) {
  const hasImage = Boolean(section.screenshot);
  const flip = index % 2 === 1;

  const body = (
    <div className="manual-section__body">
      <header className="manual-section__head">
        <span className="manual-section__num">{index + 1}</span>
        <h2 id={section.id} className="manual-section__title">
          {section.title}
          {section.pro && <span className="manual-pro">PRO</span>}
        </h2>
      </header>
      {section.blocks.map((block, i) => (
        <Block key={`${section.id}-${i}`} block={block} id={`${section.id}-${i}`} />
      ))}
    </div>
  );

  return (
    <section
      className={`manual-section${hasImage ? " manual-section--split" : ""}${
        flip ? " manual-section--flip" : ""
      }`}
    >
      {body}
      {hasImage && (
        <div className="manual-section__media">
          <div className="manual-section__media-inner">
            <PhoneScreenshot
              name={section.screenshot}
              locale={locale}
              alt={section.screenshotAlt ?? ""}
              width={230}
            />
          </div>
        </div>
      )}
    </section>
  );
}

// Structured data so search engines can understand the manual and surface its
// sections. Built from the manual data so it stays in sync with the content.
function buildJsonLd(m) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${m.canonical}#article`,
        headline: `${m.appName} ${m.title}`,
        description: m.tagline,
        inLanguage: m.locale,
        url: m.canonical,
        mainEntityOfPage: m.canonical,
        articleSection: m.sections.map((s) => s.title),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: m.appName,
            item: m.homeUrl,
          },
          { "@type": "ListItem", position: 2, name: m.title, item: m.canonical },
        ],
      },
    ],
  };
}

export default function Help({ locale = "en" }) {
  const m = manual[locale] ?? manual.en;

  return (
    <Page>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(m)) }}
      />
      <Section className="manual-hero-section">
        <Container>
          <PageHero title={m.title} subtitle={m.tagline}>
            <div className="manual-callout manual-callout--pro manual-hero__pro">
              <span className="manual-pro">PRO</span>
              <p>{renderRich(m.proNote, "pro-note")}</p>
            </div>
          </PageHero>
        </Container>
      </Section>

      <Section className="manual-body-section">
        <Container>
          <div className="manual-layout">
            <aside className="manual-toc" aria-label={m.tocTitle}>
              <div className="manual-toc__inner">
                <p className="manual-toc__title">{m.tocTitle}</p>
                <nav>
                  <ol className="manual-toc__list">
                    {m.sections.map((section, i) => (
                      <li key={section.id}>
                        <a className="manual-toc__link" href={`#${section.id}`}>
                          <span className="manual-toc__num">{i + 1}</span>
                          <span>{section.title}</span>
                          {section.pro && <span className="manual-toc__pro">PRO</span>}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <div className="manual-content">
              {m.sections.map((section, i) => (
                <ManualSection key={section.id} section={section} index={i} locale={locale} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
