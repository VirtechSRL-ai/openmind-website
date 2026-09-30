"use client";

import { capture } from "../lib/analytics";

export default function TrackedDemoLink({
  placement,
  className,
  href = "/demo",
  onClick,
  children,
}) {
  return (
    <a
      className={className}
      href={href}
      data-ph-capture-attribute-placement={placement}
      data-ph-capture-attribute-destination="/demo"
      onClick={(event) => {
        capture("cta_demo_clicked", { placement, destination: "/demo" });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
