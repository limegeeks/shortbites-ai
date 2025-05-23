import { fetchHomePosts } from "@/lib/FetchHomePosts";

// Static metadata for SEO
export const metadata = {
  title: "ShortBites - Latest Trends and Insights",
  description:
    "Discover the latest trends and insights on tech, business, culture, and more. Stay up-to-date with ShortBites!",
  openGraph: {
    title: "ShortBites - Latest Trends and Insights",
    description:
      "Discover the latest trends and insights on tech, business, culture, and more. Stay up-to-date with ShortBites!",
    url: "https://www.shortbites.ai",
    images: [
      {
        url: "https://www.shortbites.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShortBites Open Graph Image",
      },
    ],
    siteName: "ShortBites",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShortBites - Latest Trends and Insights",
    description:
      "Discover the latest trends and insights on tech, business, culture, and more. Stay up-to-date with ShortBites!",
    images: ["https://www.shortbites.ai/og-image.jpg"],
    creator: "@shortbites_ai", // Update with your actual handle
  },
  alternates: {
    canonical: "https://www.shortbites.ai",
  },
};

export const dynamic = "force-dynamic";
export default async function HomePage() {
  // const posts = await fetchHomePosts();

  // if (!posts || posts.length === 0) {
  //   return (
  //     <section className="container mx-auto py-16">
  //       <h1 className="text-4xl font-bold text-center mb-8">
  //         Latest Trends and Insights
  //       </h1>
  //       <p className="text-center text-gray-600">
  //         No posts available at the moment. Please check back later.
  //       </p>
  //     </section>
  //   );
  // }

  // return (
  //   <section className="container grid grid-cols-1 gap-4 mx-auto py-16">
  //     {/* Add post rendering logic here */}
  //     <div className="text-center text-gray-600">
  //       Posts are ready. Display coming soon.
  //     </div>
  //   </section>
  // );

  return (
    <div> 
      <h1 className="text-4xl font-bold text-center mb-8">
        Latest Trends and Insights
      </h1>
      <p className="text-center text-gray-600">
        No posts available at the moment. Please check back later.
      </p>
    </div>
  )
}
