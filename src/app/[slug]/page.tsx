import CardNew from '@/components/CardNew'
import SkeletonCard from '@/components/SkeletonCard'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Page(props:any) {
  const slug =await  props?.params?.slug;

  // Fetch data dynamically
  const res = await fetch(`https://shortbites.ai/api/posts/${slug}`);

  if (!res.ok) return notFound(); // Show 404 if post doesn't exist

  const post = await res.json();

  const initialPosts = [post]
  return (
    <div className="w-3xl h-screen mx-auto p-6">
  
        
        <React.Suspense fallback={<SkeletonCard />}> 
        {initialPosts.map(function(item,index) {
   const featuredImage = item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg";
                return ( 
                    <CardNew imageUrl={featuredImage} key={index} title={item?.title?.rendered} slug={item?.slug} date={item?.date} categories={[]} excerpt={item?.excerpt?.rendered} content={item?.conten?.rendered} index={index} />

                )

        })   }
        </React.Suspense>
      {/* <h1 className="text-4xl font-bold">{item?.title?.rendered}</h1> */}
      {/* <div dangerouslySetInnerHTML={{ __html: item?.content?.rendered }} className="mt-4" /> */}
    </div>
  )
}