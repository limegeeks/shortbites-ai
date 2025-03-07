import CardNew from '@/components/CardNew'
import SkeletonCard from '@/components/SkeletonCard'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Fetch post data from Next.js API instead of WordPress
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store', // Disable caching for fresh data
  })

  if (!res.ok) return notFound()
  const post = await res.json()

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