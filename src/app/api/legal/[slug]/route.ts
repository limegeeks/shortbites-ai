import { NextResponse } from "next/server"

const WP_BASE_URL = "https://classic.shortbites.ai"  // Replace with your WP site URL

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params

  if (!slug) {
    return NextResponse.json({ error: "Missing slug parameter" }, { status: 400 })
  }

  try {
    const wpRes = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/pages?slug=${slug}`)
    const data = await wpRes.json()

    if (data.length === 0) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 })
    }

    const page = data[0]
    return NextResponse.json({
      title: page.title.rendered,
      content: page.content.rendered,
      slug: page.slug,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch from WordPress" }, { status: 500 })
  }
}
