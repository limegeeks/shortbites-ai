'use client'

import { useState, useEffect } from 'react'
import { CardTitle, CardDescription } from '@/components/ui/card'
import { DialogHeader, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from "next/navigation";
import { DialogTrigger } from '@radix-ui/react-dialog'

export default function AutoSuggestSearch() {
  const [searchText, setSearchText] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const placeholderTexts = ["Search News Items...", "Trump",  "Find trending news...", "Explore the latest..."]
  const [open, setOpen] = useState(false)
  const [placeholder, setPlaceholder] = useState(placeholderTexts[0])
  const router = useRouter();

  // Debounce search input to optimize API calls
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchText), 300)
    return () => clearTimeout(handler)
  }, [searchText])

  // Cycle through placeholder text every 3 seconds
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % placeholderTexts.length
      setPlaceholder(placeholderTexts[index])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Fetch search results from Next.js API
  const { data, isLoading } = useQuery({
    queryKey: ['searchResults', debouncedSearch],
    queryFn: async () => {
      if (!debouncedSearch) return []
      const res = await fetch(`/api/search?query=${debouncedSearch}`)
      return res.json()
    },
    enabled: !!debouncedSearch,
  })
  // ✅ Close dialog when navigating
  const handleNavigation = (slug: string) => {
    setOpen(false);
    router.push(`/${slug}`);
  };

  return (
    <DialogContent   className=" border-0  transform w-[100vw]    text-white  z-50 p-6  rounded-xl  dark:bg-gray-900">
      <DialogHeader>
        <DialogTitle className='text-3xl my-4 font-bold first-letter:text-amber-500 text-white text-center'>
          Search What You Are Looking For
        </DialogTitle>
      </DialogHeader>

      {/* Search Input with Animated Placeholder */}
      <Input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={placeholder}
        className="placeholder:text-2xl text-slate-900 text-2xl placeholder:bold placeholder-gray-400 p-4 w-full rounded-md border focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800  transition-all duration-300"
      />

      {/* Scrollable Search Results with Skeleton Loader */}
      <div className="overflow-auto h-[calc(100vh-300px)] mt-4">
        {isLoading ? (
          <div className="space-y-4 p-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-20 w-full rounded-lg" />
            ))}
          </div>
        ) : data?.length === 0 && searchText !== '' ? (
          <p className="p-4 text-gray-500 text-center">No results found</p>
        ) : (
          data?.map((post: any, index: number) => (
            <DialogTrigger key={index}> 
            <Link key={post.id} href={`/${post.slug}`} className="block">
              <div className="p-4 rounded-lg m-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <CardTitle className="text-xl text-slate-900 font-bold first-letter:text-amber-600">
                  {post.title.rendered}
                </CardTitle>
                <CardDescription dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              </div>
            </Link>
            </DialogTrigger>
          ))
        )}
      </div>
    </DialogContent>
  )
}

function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${className}`} />
}
