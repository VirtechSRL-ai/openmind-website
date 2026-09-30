"use client";

import { capture } from "../lib/analytics";

export default function TrackedDemoLink({
  placement,
  className,
  href = "/contatti",
  onClick,
  children,
}) {
  return (
    <a
      className={className}
      href={href}
      data-ph-capture-attribute-placement={placement}
      data-ph-capture-attribute-destination="/contatti"
      onClick={(event) => {
        capture("cta_demo_clicked", { placement, destination: "/contatti" });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
