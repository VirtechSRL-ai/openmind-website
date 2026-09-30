"use client";

import { useEffect } from "react";
import { capture } from "../lib/analytics";
import { CONTACT_EMAIL } from "../lib/site";

export function ContactPageTracker() {
  useEffect(() => {
    capture("contact_page_viewed", {
      page_path: "/contatti",
    });
  }, []);

  return null;
}

export function TrackedContactLink({ placement, className, children }) {
  return (
    <a
      className={className}
      href="/contatti"
      data-ph-capture-attribute-placement={placement}
      data-ph-capture-attribute-destination="/contatti"
      onClick={() =>
        capture("contact_link_clicked", {
          placement,
          destination: "/contatti",
        })
      }
    >
      {children}
    </a>
  );
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
          page_path: "/contatti",
        })
      }
    >
      {children}
    </a>
  );
}
