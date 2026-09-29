"use client";

import { capture } from "../lib/analytics";

export default function TrackedDemoLink({ placement, className, href = "#demo", children }) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => capture("cta_demo_clicked", { placement })}
    >
      {children}
    </a>
  );
}
