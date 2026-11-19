import { getHomepageMarkdown } from "../../lib/discovery.js";

export const dynamic = "force-static";

export function GET() {
  return getHomepageMarkdown();
}
