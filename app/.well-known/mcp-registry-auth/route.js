export function GET() {
  return new Response("v=MCPv1; k=ed25519; p=Qy7XQkgF+6ztQvqqKouKHzfcFNhVEd4MYhTq7q85Z3w=", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
