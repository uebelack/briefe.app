import React from "react";
import BlogIndex from "@/components/BlogIndex";
import getBlogArticles from "@/functions/getBlogArticles";

export function generateMetadata() {
  return {
    title: "Blog | Application de Lettres",
  };
}

export default function BlogPage() {
  const articles = getBlogArticles("fr");
  return <BlogIndex articles={articles} locale="fr" />;
}
