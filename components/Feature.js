import React from "react";
import {
  AlignJustify,
  Printer,
  ExternalLink,
  Search,
  Cloud,
  WandSparkles,
  Signature,
  IdCard,
  BookUser,
  LayoutTemplate,
  Settings,
  FileText,
} from "lucide-react";

// The feature data still uses FontAwesome-style icon names; map them to lucide
// so we get a single, consistent, crisp icon set (FontAwesome CDN was unused).
const ICONS = {
  "align-justify": AlignJustify,
  print: Printer,
  "arrow-up-right-from-square": ExternalLink,
  "magnifying-glass": Search,
  cloud: Cloud,
  "wand-magic-sparkles": WandSparkles,
  signature: Signature,
  "address-card": IdCard,
  "address-book": BookUser,
  "file-lines": LayoutTemplate,
  gear: Settings,
};

export default function Feature({ icon, title, description, pro = false }) {
  const Icon = ICONS[icon] ?? FileText;
  return (
    <div className={`feature-card${pro ? " pro" : ""}`}>
      <div className="feature-icon">
        <Icon strokeWidth={1.75} aria-hidden />
      </div>
      <div>
        <div className="feature-title">{title}</div>
        <div className="feature-desc">{description}</div>
      </div>
    </div>
  );
}
