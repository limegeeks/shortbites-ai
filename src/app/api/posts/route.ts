import { NextRequest, NextResponse } from 'next/server';

const WP_API_URL = 'https://shortbites.ai/wp-json/wp/v2';

export async function GET(req: NextRequest) {


    
    try {
        const { searchParams } = new URL(req.url);

        // Extract query parameters
        const categorySlug = searchParams.get('category') || ''; // Category slug
        const search = searchParams.get('search') || ''; // Search query for auto-suggest
        const per_page = searchParams.get('per_page') || '3'; // Number of posts
        const page = searchParams.get('page') || '1'; // Pagination
        const order = searchParams.get('order') || 'desc'; // Order (asc/desc)
        const orderby = searchParams.get('orderby') || 'date'; // Sort by
        const exclude = searchParams.get('exclude') || ''; // Post ID(s) to exclude (comma-separated)

        let categoryId = '';

        // If category slug is provided, fetch its ID
        if (categorySlug) {

            
            const categoryRes = await fetch(`${WP_API_URL}/categories?slug=${categorySlug}`);
            const categoryData = await categoryRes.json();
            if (categoryData.length > 0) {
                categoryId = categoryData[0].id;
            } else {
                return NextResponse.json({ error: 'Category not found' }, { status: 404 });
            }
        }

        // Construct query string for posts
        const query = new URLSearchParams({
            per_page,
            page,
            order,
            orderby,
            categories_exclude: '8', // Exclude jobs category
            ...(categoryId ? { categories: categoryId.toString() } : {}),
            ...(search ? { search } : {}),
            ...(exclude ? { exclude } : {}),
            _embed: 'true', // Embed media
            // _fields: 'id,title,excerpt,date,slug,featured_media,author,yoast_head_json', // Fields to include
        }).toString();

        // Fetch posts from WordPress API
        const response = await fetch(`${WP_API_URL}/posts?${query}`);
        const posts = await response.json();

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}
