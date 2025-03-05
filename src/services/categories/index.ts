
const url = "http://localhost:3000";
export async function getCategories() {
    try {
      const res = await fetch(`${url}/api/categories`, {
        // cache: "force-cache", // "force-cache" for SSG; "no-store" for SSR
        
          next: { revalidate: 3600 }, // Cache for 1 hour
        
      });
  
      if (!res.ok) throw new Error("Failed to fetch categories");
  
      return await res.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }