import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ fetch, url }) => {
  const id = url.searchParams.get("id");
  const label = url.searchParams.get("label");

  if (!id || !label) return new Response(null, { status: 400 });

  const blob = await fetch(
    `https://vid.puffyan.us/api/v1/captions/${id}?label=${label}`,
  ).then((r) => r.blob());

  return new Response(blob, {
    status: 200,
    headers: {
      "Content-Type": "text/vtt",
    },
  });
};
