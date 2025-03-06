import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) return NextResponse.json([]);

  const res = await fetch(`https://shortbites.ai/api/search?query=${query}`);
  const results = await res.json();

  return NextResponse.json(results);
}