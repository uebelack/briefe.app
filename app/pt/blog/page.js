import React from "react";
import BlogIndex from "@/components/BlogIndex";
import getBlogArticles from "@/functions/getBlogArticles";

export function generateMetadata() {
  return {
    title: "Blog | Aplicação de Cartas",
  };
}

export default function BlogPage() {
  const articles = getBlogArticles("pt");
  return <BlogIndex articles={articles} locale="pt" />;
}
