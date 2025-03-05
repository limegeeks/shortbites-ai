import { fetchPosts } from "@/services/posts";
import { useInfiniteQuery } from "@tanstack/react-query";


export function useInfinitePosts({ type, categorySlug, postId }: { 
  type: "latest" | "category" | "related"; 
  categorySlug?: string; 
  postId?: string; 
}) {

    console.log("slug is",categorySlug);
    
  return useInfiniteQuery({
    queryKey: ["posts", type, categorySlug, postId], // ✅ Cached separately for each type
    queryFn: ({ pageParam }) => {
            console.log("page param is", pageParam);
            
        return fetchPosts({ pageParam, type, categorySlug, postId })
    } ,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => (lastPage.length === 3 ? pages.length + 1 : undefined),
  });
}