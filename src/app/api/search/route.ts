import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    // Get search query from request URL
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('query')

    if (!query) {
      return NextResponse.json([], { status: 200 })
    }

    // Fetch search results from WordPress API
    const res = await fetch(`https://www.shortbites.ai/wp-json/wp/v2/posts?search=${query}&_fields=id,slug,title,excerpt`, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store', // Prevent caching for fresh results
    })

    if (!res.ok) {
      throw new Error('Failed to fetch posts from WordPress API')
    }

    const posts = await res.json()
    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    console.error('Search API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}