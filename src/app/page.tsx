// app/home/page.tsx

import { fetchHomePosts } from "@/lib/FetchHomePosts"
import { Card, CardHeader, CardDescription as CardBody, CardFooter } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import  Image  from "next/image"
import  Head  from "next/head"
import { stringify } from "querystring"

export const dynamic = "force-static" // Forces static rendering for better SEO

export default async function HomePage() {
  const posts = await fetchHomePosts()
console.log("posts are", posts);



  // Ensure posts are available before attempting to group them
  if (!posts || posts.length === 0) {
    return (
      <section className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Latest Trends and Insights</h1>
        <p className="text-center text-gray-600">No posts available at the moment. Please check back later.</p>
      </section>
    )
  }

  console.log("posts in homepage are are", posts);
  
  // Group posts by category


  
  return (

    
    <>
      <Head>
        <title>ShortBites - Latest Trends and Insights</title>
        <meta
          name="description"
          content="Discover the latest trends and insights on tech, business, culture, and more. Stay up-to-date with ShortBites!"
        />
        <meta property="og:title" content="ShortBites - Latest Trends and Insights" />
        <meta
          property="og:description"
          content="Discover the latest trends and insights on tech, business, culture, and more. Stay up-to-date with ShortBites!"
        />
        <meta property="og:image" content="https://www.shortbites.ai/og-image.jpg" />
        <meta property="og:url" content="https://www.shortbites.ai" />
        <meta name="twitter:title" content="ShortBites - Latest Trends and Insights" />
        <meta
          name="twitter:description"
          content="Discover the latest trends and insights on tech, business, culture, and more. Stay up-to-date with ShortBites!"
        />
        <meta name="twitter:image" content="https://www.shortbites.ai/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.shortbites.ai" />
      </Head>

      <section className="container grid grid-c mx-auto py-16">
       
        {posts && Object.keys(posts).map((category) => {
          
          console.log("category is", JSON.stringify(category));
         return  ( <div key={category}><pre>{JSON.stringify(category )}</pre> </div>)
          
          })}
      </section>
    </>
  )
}
