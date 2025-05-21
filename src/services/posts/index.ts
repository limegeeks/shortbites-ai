const url = "https://www.shortbites.ai/api/posts/";

export async function getInitialPosts( page = 1, limit = 3, category = "" ) {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        per_page: limit.toString(),
        ...(category && { category }), // Add category only if provided
      }).toString();
  
        const finalUrl = `${url}?${queryParams}`;
          console.log("final url in geting initial posts is", finalUrl);
          
      const res = await fetch(finalUrl, {
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
  

  export async function fetchPosts({ pageParam = 1, type, categorySlug, postSlug }: { 
    pageParam: number; 
    type: "latest" | "category" | "related"; 
    categorySlug?: string; 
    postSlug?: string; 
  }) {
    let url = `/api/posts/?page=${pageParam}&per_page=3`;
  
    if (type === "category" && categorySlug) {
      url += `&category=${categorySlug}`;
    } else if (type === "related" && postSlug) {

      if(pageParam == 1) {
        pageParam = 2; 
      }
       console.log("url is", url);
        
   
      url = `https://www.shortbites.ai/api/posts/${postSlug}/related?page=${pageParam}&per_page=${3}&embed`;
    }
  console.log("url in get posts is",url);
  
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load posts");
    return res.json();
  }
  