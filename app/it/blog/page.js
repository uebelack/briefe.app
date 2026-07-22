import React from "react";
import BlogIndex from "@/components/BlogIndex";
import getBlogArticles from "@/functions/getBlogArticles";

export function generateMetadata() {
  return {
    title: "Blog | App Lettere",
  };
}

export default function BlogPage() {
  const articles = getBlogArticles("it");
  return <BlogIndex articles={articles} locale="it" />;
}
