import React from "react";
import Home from "@/components/Home";

export default async function HomePage({ searchParams }) {
  const { android } = await searchParams;
  return (
    <Home
      locale="nl"
      android={android === "true" ? true : android === "false" ? false : undefined}
    />
  );
}
