import { NextResponse } from "next/server"

const WP_BASE_URL = "https://www.shortbites.ai/wp-json/wp/v2"

// Fetch the latest posts for the carousel
async function fetchLatestPosts() {
  const latestPosts = await fetch(`${WP_BASE_URL}/posts?per_page=5&order=desc`).then((res) => res.json())
  return latestPosts
}

// Fetch the top-level categories
async function fetchCategories() {
  const categories = await fetch(`${WP_BASE_URL}/categories?parent=0`).then((res) => res.json())
  return categories
}

// Fetch posts for each category, excluding specific post IDs
async function fetchCategoryPosts(excludePostIds: number[]) {
  const categories = await fetchCategories()

  const postsByCategory = await Promise.all(
    categories.map(async (cat: any) => {
      // Construct the query to exclude specific post IDs using `exclude` parameter
      const excludeQuery = excludePostIds.length > 0 ? `&exclude=${excludePostIds.join(",")}` : ""
      
      // Fetch posts for the category excluding the given post IDs
      const posts = await fetch(
        `${WP_BASE_URL}/posts?categories=${cat.id}&per_page=5${excludeQuery}`
      ).then((res) => res.json())

      return { category: cat, posts }
    })
  )

  return postsByCategory
}

export async function GET() {
  try {
    // Fetch the latest posts for the carousel
    const latestPosts = await fetchLatestPosts()
    const latestPostIds = latestPosts.map((post: any) => post.id)

    // Fetch the rest of the posts, excluding the latest ones
    const postsByCategory = await fetchCategoryPosts(latestPostIds)

    // Set the cache header for 6 hours
    const response = NextResponse.json({ latestPosts, postsByCategory })

    // Cache for 6 hours (21600 seconds)
    response.headers.set('Cache-Control', 'public, max-age=21600, s-maxage=21600')

    return response
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data from WordPress" }, { status: 500 })
  }
}
