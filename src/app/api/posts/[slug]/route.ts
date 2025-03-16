import { NextRequest, NextResponse } from 'next/server';

const WP_API_URL = 'https://classic.shortbites.ai/wp-json/wp/v2';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }>  }) {
    try {
        const { slug } = await params;
        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        // ✅ Fetch the post by slug
        const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=true`, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'ShortBitesAPI/1.0',
            },
        });

        if (!response.ok) throw new Error(`Post fetch failed: ${response.statusText}`);

        const posts = await response.json();

        // ✅ WordPress returns an array, check if post exists
        if (!posts.length) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(posts[0], { status: 200 }); // ✅ Return first post object
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}
