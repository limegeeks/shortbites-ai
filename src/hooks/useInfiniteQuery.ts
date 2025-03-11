import { fetchPosts } from "@/services/posts";
import { useInfiniteQuery } from "@tanstack/react-query";


export function useInfinitePosts({ initialPosts,  type, categorySlug, postSlug }: { 
  
  initialPosts: any[], 
  type: "latest" | "category" | "related"; 
  categorySlug?: string; 
  postSlug?: string; 
}) {


  const tanstackObject = {
    queryKey:  type== "related" ?  ['related-posts', 'related-postSlug'] :  [type+"posts", type, categorySlug, postSlug], // ✅ Cached separately for each type
    queryFn: ({ pageParam  } : {pageParam:  number}) => {
            
      console.log("initla pageparam for "+postSlug + "" + type, pageParam);
      
        return fetchPosts({ pageParam, type, categorySlug, postSlug } )
    } ,
    initialPageParam:  type == "related" ? 2 : 1,
    getNextPageParam: (lastPage : any, allPages : any) =>  {
        console.log("last page ", lastPage);
        console.log("all pages", allPages);
        
        
      return (lastPage.length === 3 ? allPages.length + 1: undefined);
    }, 
    structuralSharing: type == 'related'? true : false,

    initialData: {
      pages: [initialPosts], // ✅ Keep initial posts as first page
      pageParams: [1],
    },

  }; 
    
  console.log("tanstack object for the query  is", tanstackObject);
  
  return useInfiniteQuery(tanstackObject);
}