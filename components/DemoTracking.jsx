"use client";

import { useEffect } from "react";
import { capture } from "../lib/analytics";
import { CONTACT_EMAIL } from "../lib/site";

export function DemoPageTracker() {
  useEffect(() => {
    capture("demo_page_viewed", {
      page_path: "/demo",
    });
  }, []);

  return null;
}

export function TrackedEmailLink({ placement, className, children }) {
  return (
    <a
      className={className}
      href={`mailto:${CONTACT_EMAIL}`}
      data-ph-capture-attribute-placement={placement}
      data-ph-capture-attribute-channel="email"
      onClick={() =>
        capture("contact_email_clicked", {
          placement,
          page_path: "/demo",
        })
      }
    >
      {children}
    </a>
  );
}
