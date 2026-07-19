import React from "react";
import Link from "next/link";
import Image from "next/image";
import getTranslations from "@/functions/getTranslations";
import languages from "@/data/languages";

export default function Footer({ locale }) {
  const t = getTranslations(locale);
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-inner">
          <Link href={`/${locale}`} className="foot-brand" aria-label={t("common.title")}>
            <Image src="/logo.svg" alt="Letter logo" width={26} height={26} />
            <span>{t("common.title")}</span>
          </Link>

          <div className="foot-langs">
            {Object.keys(languages).map((key) => (
              <Link
                key={key}
                href={`/${key}`}
                aria-current={key === locale ? "page" : undefined}
                style={key === locale ? { color: "var(--foreground)", fontWeight: 550 } : undefined}
              >
                {languages[key]}
              </Link>
            ))}
          </div>

          <div className="foot-legal">
            <Link href={t("footer.imprint_link")}>{t("footer.imprint")}</Link>
            <Link href={t("footer.privacy_link")}>{t("footer.privacy")}</Link>
          </div>

          <div className="foot-copy">
            © {new Date().getFullYear()} Übelacker Solutions GmbH — {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
