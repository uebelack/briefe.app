import React from "react";
import Help from "@/components/Help";

export function generateMetadata() {
  return {
    title: "Hilfe | Briefe App",
  };
}

export default function HelpPage() {
  return <Help locale="de" />;
}
