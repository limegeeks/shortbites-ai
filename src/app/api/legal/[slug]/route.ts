import { NextRequest,  NextResponse } from 'next/server'

const WP_BASE_URL = 'https://www.shortbites.ai'

export async function GET(
  req: NextRequest,
   context: { params: any }
): Promise<NextResponse> {
//   const slug = req.nextUrl.searchParams.get('slug')
// console.log("slug is", slug);
  const { slug } = context.params;

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 })
  }

  try {
    const wpRes = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/pages?slug=${slug}`)
    const data = await wpRes.json()
console.log("data is ", data);

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    const page = data[0]
    return NextResponse.json({
      title: page.title.rendered,
      content: page.content.rendered,
      slug: page.slug,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch from WordPress' }, { status: 500 })
  }
}
