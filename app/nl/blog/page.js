import React from "react";
import BlogIndex from "@/components/BlogIndex";
import getBlogArticles from "@/functions/getBlogArticles";

export function generateMetadata() {
  return {
    title: "Blog | Brieven App",
  };
}

export default function BlogPage() {
  const articles = getBlogArticles("nl");
  return <BlogIndex articles={articles} locale="nl" />;
}
