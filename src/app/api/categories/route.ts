// app/api/categories/route.ts
import { NextRequest, NextResponse } from "next/server";

const WP_API_URL = 'https://www.shortbites.ai';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Build query string from incoming request
    const queryString = searchParams.toString();
    const wpUrl = `${WP_API_URL}/wp-json/wp/v2/categories${queryString ?`?${queryString}` : ''}`;
console.log("url for query is", wpUrl);

    const response = await fetch(wpUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }

    const categories = await response.json();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to load categories" }, { status: 500 });
  }
}
