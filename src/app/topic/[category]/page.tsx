import React from "react";
import { getInitialPosts } from "@/services/posts";
import InfinitePosts from "@/components/infiniteposts/InfinitePosts";
import SkeletonCard from "@/components/SkeletonCard";
import { headers } from "next/headers";
import { isMobile } from "@/lib/utils";
import ClientComponent from "@/components/ClientComponent";


interface PapeProp { // <--- your custom page props
    // your props
  
        slug: string
   
   
 }
export default async function Page(props: any) {


    const slug =await  (await props?.params)?.category;
let initialPosts =  await  getInitialPosts(1,3,slug);



  return (
    <>
      <main className="w-full  font-[family-name:var(--font-geist-sans)] overflow-y-auto snap-y snap-mandatory h-screen snap-always ">
    

               <InfinitePosts categorySlug={slug} type={"category"} initialPosts={initialPosts} />
            
        
   


      </main>
  
    </>
  );
}
