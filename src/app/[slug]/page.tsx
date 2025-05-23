import CardNew from '@/components/CardNew'
import InfinitePosts from '@/components/infiniteposts/InfinitePosts';
import SkeletonCard from '@/components/SkeletonCard'
import { Metadata } from 'next';
import { notFound } from 'next/navigation'
import React from 'react'


// Fetch main post by slug (server-side)
async function getPost(slug: string) {
    const url = `http://localhost:3000/api/posts/${slug}`;
    const res = await fetch(url, { cache: 'no-store' }); // Ensuring fresh data
    if (!res.ok) return null;
    return res.json();
  }
  
  // Fetch related posts (server-side)
  async function getRelatedPosts(slug: string) {
    const url = `http://localhost:3000/api/posts/${slug}/related`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  }


// // SEO Metadata
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     const post = await getPost(params.slug);
//     return {
//       title: post?.title?.rendered || 'ShortBites.ai',
//       description: post?.excerpt?.rendered.replace(/<[^>]+>/g, '') || 'Latest short news bites.',
//       openGraph: {
//         title: post?.title?.rendered,
//         description: post?.excerpt?.rendered.replace(/<[^>]+>/g, ''),
//         images: [{ url: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || '/default-image.jpg' }],
//       },
//     };
//   }
  
// Optional: Used for static route mapping if you want pre-generated routes
export async function generateStaticParams() {
  return [
    { slug: "privacy-policy" },
    { slug: "terms-and-conditions" },
    { slug: "about" },
  ];
}
export default async function Page(props:any) {
  const slug =  (await props?.params)?.slug;


  console.log("slug is", slug);
  const url = `http://localhost:3000/api/posts/${slug}`
  
  console.log("url is", url);
  
  // Fetch data dynamically
  // Fetch main post
  const post = await getPost(slug);
  if (!post) return notFound();

  // Fetch first 2 related posts
  const relatedPosts = await getRelatedPosts(slug);

  // Merge into a single array for structured HTML
  const initialPosts = [post, ...relatedPosts];




  return (
<> 
      <main className="dark:bg-slate-900 dark:text-white w-full   overflow-y-auto snap-y snap-mandatory h-screen snap-always font-[family-name:var(--font-geist-sans)]">
    

        
        <React.Suspense fallback={<SkeletonCard />}> 
                <InfinitePosts type='related' initialPosts={initialPosts} postSlug={slug}/>
        </React.Suspense>
      {/* <h1 className="text-4xl font-bold">{item?.title?.rendered}</h1> */}
      {/* <div dangerouslySetInnerHTML={{ __html: item?.content?.rendered }} className="mt-4" /> */}
    </main>
    </>
  )
}