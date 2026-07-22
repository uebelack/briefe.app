import React from "react";
import getTranslations from "@/functions/getTranslations";
import Blog from "./Blog";

export default function BlogIndex({ articles, locale }) {
  const t = getTranslations(locale);

  return (
    <div className="blog-index">
      <h1 className="blog-index-title">{t("blog.title")}</h1>
      <p className="blog-index-intro">{t("blog.intro")}</p>
      <div className="mt-8">
        <Blog articles={articles} locale={locale} />
      </div>
    </div>
  );
}
