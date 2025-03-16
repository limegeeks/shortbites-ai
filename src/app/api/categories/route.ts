// app/api/categories/route.ts (Next.js API Route)
import { NextResponse } from "next/server";
const WP_API_URL = 'https://classic.shortbites.ai';

export async function GET(req: Request) {
  try {
    // Fetch categories from WordPress API
    const response = await fetch(`${WP_API_URL}/wp-json/wp/v2/categories`, {
      cache: "no-store", // Avoids stale data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }

    const categories = await response.json();

    // Return the response as JSON
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to load categories" }, { status: 500 });
  }
}