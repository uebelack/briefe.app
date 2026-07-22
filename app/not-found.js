import React from "react";
import Link from "next/link";

import "../styles/output.css";

export const metadata = {
  title: "404 — Return to Sender | Letter App",
};

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf-inner">
        <div className="nf-envelope" aria-hidden>
          <div className="nf-envelope-flap" />
          <div className="nf-envelope-body">
            <span className="nf-stamp">RETURN&nbsp;TO&nbsp;SENDER</span>
          </div>
        </div>

        <p className="nf-code">404</p>
        <h1 className="nf-title">This letter got lost in the mail.</h1>
        <p className="nf-text">
          The page you&rsquo;re looking for moved, was never written, or is still sitting in a
          drawer somewhere. We&rsquo;ve stamped it &ldquo;undeliverable.&rdquo;
        </p>

        <Link href="/" className="nf-btn">
          Take me back home
        </Link>

        <p className="nf-ps">
          P.S. &mdash; Unlike your ex, this page really isn&rsquo;t coming back.
        </p>
      </div>
    </main>
  );
}
