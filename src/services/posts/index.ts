const url = "http://localhost:3000/api/posts/";

export async function getInitialPosts( page = 1, limit = 3, category = "" ) {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        per_page: limit.toString(),
        ...(category && { category }), // Add category only if provided
      }).toString();
  
      const res = await fetch(`${url}?${queryParams}`, {
        // cache: "no-store",
        next: { revalidate: 3600 }, // Cache for 1 hour
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching initial posts:", error);
      return []; // Return an empty array to prevent crashes
    }
  }
  

  export async function fetchPosts({ pageParam = 1, type, categorySlug, postId }: { 
    pageParam: number; 
    type: "latest" | "category" | "related"; 
    categorySlug?: string; 
    postId?: string; 
  }) {
    let url = `/api/posts/?page=${pageParam}&per_page=3`;
  
    if (type === "category" && categorySlug) {
      url += `&category=${categorySlug}`;
    } else if (type === "related" && postId) {
      url += `&related_to=${postId}`;
    }
  console.log("url is",url);
  
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load posts");
    return res.json();
  }
  