import { getProfile } from "../../../../lib/discovery.js";

const allowed = "GET, HEAD, OPTIONS";

function problem(status, title, detail, code, headers = {}) {
  return Response.json({ type: "about:blank", title, status, detail, code }, {
    status,
    headers: { "Content-Type": "application/problem+json", ...headers },
  });
}

export async function GET(_request, { params }) {
  if ((await params).resource === "profilo") return getProfile();
  return problem(404, "Not Found", "Per consultare il profilo pubblico usa GET /api/v1/profilo.", "resource_not_found");
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: { Allow: allowed } });
}

function methodNotAllowed() {
  return problem(405, "Method Not Allowed", "Il profilo è in sola lettura. Usa GET /api/v1/profilo.", "method_not_allowed", { Allow: allowed });
}

export { methodNotAllowed as POST, methodNotAllowed as PUT, methodNotAllowed as PATCH, methodNotAllowed as DELETE };
