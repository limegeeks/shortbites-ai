import { NextRequest, NextResponse } from 'next/server';

const WP_API_URL = 'https://shortbites.ai/wp-json/wp/v2';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    try {
        const { slug } = params;
        if (!slug) {
            return NextResponse.json({ error: 'Post slug is required' }, { status: 400 });
        }

        const { searchParams } = new URL(req.url);
        const per_page = searchParams.get('per_page') || '2'; // Default: 10 posts per page
        const page = searchParams.get('page') || '1'; // Default: First page

        // ✅ Step 1: Fetch the post by slug to get categories & tags
        const postRes = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=true`);
        const postData = await postRes.json();
        if (!postData.length) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        const post = postData[0]; // Slug queries return an array, take the first item
        const { id, categories, tags } = post;

        if (!categories.length && !tags.length) {
            return NextResponse.json({ posts: [], hasNextPage: false }, { status: 200 });
        }

        // ✅ Step 2: Fetch related posts based on categories & tags
        const queryParams = new URLSearchParams({
            per_page,
            page,
            exclude: id.toString(), // Exclude current post
            orderby: 'date',
            order: 'desc',
            _embed: 'true',
            ...(categories.length ? { categories: categories.join(',') } : {}),
            ...(tags.length ? { tags: tags.join(',') } : {}),
        });

        const relatedRes = await fetch(`${WP_API_URL}/posts?${queryParams}`);
        const relatedPosts = await relatedRes.json();

        // ✅ Step 3: Determine if there's a next page
        const totalPages = relatedRes.headers.get('X-WP-TotalPages') || '1';
        const hasNextPage = parseInt(page) < parseInt(totalPages);

        return NextResponse.json( relatedPosts , { status: 200 });
    } catch (error) {
        console.error('Error fetching related posts:', error);
        return NextResponse.json({ error: 'Failed to fetch related posts' }, { status: 500 });
    }
}
