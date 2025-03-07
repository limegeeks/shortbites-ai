import { fetchPosts } from "@/services/posts";
import { useInfiniteQuery } from "@tanstack/react-query";


export function useInfinitePosts({ type, categorySlug, postSlug }: { 
  type: "latest" | "category" | "related"; 
  categorySlug?: string; 
  postSlug?: string; 
}) {

    
  return useInfiniteQuery({
    queryKey: ["posts", type, categorySlug, postSlug], // ✅ Cached separately for each type
    queryFn: ({ pageParam }) => {
            
        return fetchPosts({ pageParam, type, categorySlug, postSlug })
    } ,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => (lastPage.length === 3 ? pages.length + 1 : undefined),
  });
}