// lib/fetchHomePosts.ts

export async function fetchHomePosts() {
  try {
    const res = await fetch(`http://localhost:3000/api/home`, {
      method: "GET",
      cache: "force-cache", // Cache the response for 6 hours
    })

    console.log("Response from API:", res);
    
    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return {
      latestPosts: [],
      postsByCategory: [],
    }
  }
}
export async function fetchLegalPage(slug: string) {
  const res = await fetch(`/api/legal/${slug}`)
  const data = await res.json()
  return data
}
export async function fetchPost(slug: string) {
  const res = await fetch(`/api/posts/${slug}`)
  const data = await res.json()
  return data
}
export async function fetchCategories() {
  const res = await fetch("/api/categories")
  const data = await res.json()
  return data
}   