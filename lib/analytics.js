export function capture(event, properties) {
  if (typeof window !== "undefined" && window.posthog?.capture) {
    window.posthog.capture(event, properties);
  }
}
