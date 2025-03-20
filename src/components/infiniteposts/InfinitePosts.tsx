"use client";

import { useInfinitePosts } from "@/hooks/useInfiniteQuery";
import { Suspense, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import SkeletonCard from "../SkeletonCard";
import  Card  from "../Card";
import { Skeleton } from "../ui/skeleton";
import React from "react";
import Ad from "../Ad";
import CardNew from "../CardNew";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { useScroll } from "@/providers/ScrollProvider";
interface Post {
    id: number;
    title: { rendered: string };  // ✅ Titles are inside a "rendered" object
    excerpt: { rendered: string };  // ✅ Excerpts are inside a "rendered" object
    slug: string;
    link: string;
    date: string;  // ✅ Published date as ISO string
    _embedded?: {
      "wp:featuredmedia"?: { source_url: string }[];  // ✅ Featured image
      author?: { name: string }[];
      "wp:term"?: { name: string }[][];  // ✅ Categories & tags
    };
  }
  
  interface PostsListProps {
    initialPosts: Post[];  // ✅ Array of WordPress post objects
    type: "latest" | "category" | "related";  // ✅ Type of posts
    categorySlug?: string;  // ✅ Optional category slug (for category pages)
    postSlug?: string | undefined;  // ✅ Optional postId (for related posts)
  }
export default function PostsList({ initialPosts, type, categorySlug, postSlug } : PostsListProps) {
  const mainRef = useRef<HTMLElement | null>(null);
  const { setHideHeader } = useScroll();
  let lastScrollTop = 0;
  const qc = new QueryClient()
  const observerRef = useRef(null);
//     const queryClient = useQueryClient();

//   // ✅ Pre-fill cache for instant rendering (important for SEO)
//   queryClient.setQueryData(["posts", type, categorySlug, postId], { pages: [initialPosts], pageParams: [1] });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,

  } = useInfinitePosts({ initialPosts, type, categorySlug, postSlug });




  console.log("data is", data);
  console.log("initial posts for " + postSlug, initialPosts);
  
  

  let scrollTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleScroll = () => {
      const currentScrollTop = main.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down → Hide header
        setHideHeader(true);
      } else {
        // Scrolling up → Show header
        setHideHeader(false);
      }

      lastScrollTop = currentScrollTop;

      // If scrolling stops for 300ms, ensure header remains visible
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setHideHeader(false);
      }, 500);
    };

    main.addEventListener("scroll", handleScroll);
    return () => {
      main.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [setHideHeader]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.95 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);



  return (

    <main ref={mainRef} className="dark:bg-slate-900 dark:text-white w-full   overflow-y-auto snap-y snap-mandatory h-screen snap-always font-[family-name:var(--font-geist-sans)]
    ">
    <HydrationBoundary queryClient={qc}>
    <section className="w-full mx-auto">
    <Suspense fallback={<SkeletonCard />}>
   
      {data?.pages.flat().map((post, index) =>    { 
        
        
      
        
        const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";
//   const author = post._embedded?.author?.[0]?.name || "Unknown Author";
  const formattedDate = new Date(post.date).toLocaleDateString();




        
        return (

       <React.Fragment key={index}> 
         <article id={"article-"+index} key={index} className=" snap-always snap-mandatory snap-center w-full  bg-white">
   
   <CardNew 
  
    title={post?.title?.rendered}
    slug={post?.slug}
    date={formattedDate}
    categories={post._embedded?.["wp:term"]?.[0] || []}
    tags={post?._embedded?.["wp:term"]?.[1] || []}
    excerpt={post?.excerpt?.rendered}
    content={post?.content?.rendered}
    imageUrl={featuredImage}
    index={index}
   />


       </article>

       {((index + 1) % 3 === 0) && <Ad index={index} title={""} slug={""} date={""} categories={[]} excerpt={""} content={""} />} {/* Insert Ad every 3rd post */}
       </React.Fragment>
      )}
    )}
      {isFetchingNextPage && hasNextPage &&  <div className="flex   w-full justify-center text-center "> 

        <div className="flex justify-center -mt-32  items-center space-x-4">
      <Skeleton className="h-12 w-12 bg-amber-500/60 rounded-full animate-pulse"  />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-amber-500/60 animate-pulse" />
        <Skeleton className="h-4 w-[200px] bg-amber-500/60" />
      </div>
    </div>
      </div> }
 
    </Suspense>



   <div ref={observerRef} className="h-32 w-full" /> 
    
      </section>
      </HydrationBoundary>
      </main>
  );
}
