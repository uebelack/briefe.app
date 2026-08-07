import React from "react";
import { FileText } from "lucide-react";

// Icons are lucide components supplied directly by the feature data.
export default function Feature({ icon: Icon = FileText, title, description, pro = false }) {
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
