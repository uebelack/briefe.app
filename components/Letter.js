import React from "react";
import addresses from "@/data/addresses";

// Wraps template detail content (the MDX letter body) in a letter "sheet" with a
// localized example sender/recipient address, date and signature. On the
// templates index (which also uses this layout) the CSS `:has(.templates-index)`
// rule strips all of this back to a plain container.
export default function Letter({ locale, children }) {
  const a = addresses[locale] ?? addresses.en;
  const date = new Date().toLocaleDateString(a.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="letter-sheet">
      <div className="letter-head">
        <address className="letter-sender">
          <span className="letter-name">{a.sender.name}</span>
          {a.sender.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        <address className="letter-recipient">
          <span className="letter-name">{a.recipient.name}</span>
          {a.recipient.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        <div className="letter-date">
          {a.city}, {date}
        </div>
      </div>

      <div className="letter-body prose proese-briefe">{children}</div>

      <div className="letter-signature">{a.sender.name}</div>
    </div>
  );
}
