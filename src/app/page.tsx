import Image from "next/image";
import React, { Suspense } from "react";
import { getInitialPosts } from "@/services/posts";
import { Metadata } from "next";
import InfinitePosts from "@/components/infiniteposts/InfinitePosts";
import SkeletonCard from "@/components/SkeletonCard";
export const metadata: Metadata = {
  title: "Latest News - ShortBites.ai",
  description: "Stay updated with the latest news in short-form content on ShortBites.ai.",
  openGraph: {
    title: "Latest News - ShortBites.ai",
    description: "Get the latest news in a short-form format.",
    url: "https://shortbites.ai",
    siteName: "ShortBites.ai",
    type: "website",
  },
};


export default async function Home() {

  const initialPosts = await getInitialPosts();



  return (
<> 
      <main className="dark:bg-slate-900 dark:text-white w-full   overflow-y-auto snap-y snap-mandatory h-screen snap-always font-[family-name:var(--font-geist-sans)]
      ">
    


        <Suspense fallback={<div className=" h-screen w-screen  "> <SkeletonCard /></div>}>
       <InfinitePosts type={"latest"} initialPosts={initialPosts} />
       </Suspense>
    


      </main>
      </>
  
  );
}
