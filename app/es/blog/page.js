import React from "react";
import BlogIndex from "@/components/BlogIndex";
import getBlogArticles from "@/functions/getBlogArticles";

export function generateMetadata() {
  return {
    title: "Blog | Aplicación de Cartas",
  };
}

export default function BlogPage() {
  const articles = getBlogArticles("es");
  return <BlogIndex articles={articles} locale="es" />;
}
