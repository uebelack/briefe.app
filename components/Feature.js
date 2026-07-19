import React from "react";
import {
  AlignJustify,
  Printer,
  ExternalLink,
  Search,
  Cloud,
  Sparkles,
  WandSparkles,
  FileText,
  Settings,
  Signature,
  BookUser,
  Contact,
} from "lucide-react";

// Map legacy Font Awesome names (from data/features.js) to lucide icons.
const ICONS = {
  "align-justify": AlignJustify,
  print: Printer,
  "arrow-up-right-from-square": ExternalLink,
  "magnifying-glass": Search,
  cloud: Cloud,
  "wand-magic-sparkles": WandSparkles,
  signature: Signature,
  "address-book": BookUser,
  "address-card": Contact,
  "file-lines": FileText,
  gear: Settings,
  sparkles: Sparkles,
};

export default function Feature({ icon, title, description }) {
  const Icon = ICONS[icon] ?? Sparkles;
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
