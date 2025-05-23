import { notFound } from "next/navigation"
import parse from "html-react-parser"

export async function generateStaticParams() {
  return [
    { slug: "privacy-policy" },
    { slug: "terms-and-conditions" },
    { slug: "about" },
  ]
}
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://192.168.1.33:3000"

export default async function LegalPage(props: any) {

    
    
  const { slug } =  await props.params
console.log("slug is", slug);
const url = `${baseUrl}/api/legal/${slug}`
  const res = await fetch(url)

  console.log("res is", res.body);
  
  if (!res.ok) return notFound()

  const data = await res.json()
  console.log("data is ", data);
  
  return (
    <main className="max-w-3xl mx-auto px-4 py-32">
      <h1 className="text-3xl font-bold mb-6 mt-8">{data.title}</h1>
      <div className="prose prose-slate max-w-none">{parse(data.content)}</div>
    </main>
  )
}
