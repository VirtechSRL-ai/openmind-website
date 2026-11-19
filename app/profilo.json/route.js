import { getProfile } from "../../lib/discovery.js";

export const dynamic = "force-static";

export function GET() {
  return getProfile();
}
