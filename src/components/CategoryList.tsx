
import { useQuery } from "@tanstack/react-query";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cache, Suspense } from "react";
import Link from "next/link";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";



export default async function CategoriesList(props: any) {

  const {categories} = props;

    // ✅ Fetch categories (prevents Suspense from triggering incorrectly)
  
    // ✅ Handle empty data
    if (!categories.length) {
      return <p className="p-4 text-gray-500">No categories available.</p>;
    }
  

    return (
      <Suspense fallback={<p>Loading categories...</p>}>
 
     
        <SidebarMenu>
          {categories.map((category: any) => { 
            
            
            
            return (

<SidebarMenuItem className="hover:mx-0 px-0"  key={category.name}>
<SidebarMenuButton  asChild>
  <Link className="font-bold text-xl hover:text-amber-500 focus:text-amber-500 text-slate-700" href={`/topic/${category.slug}`}>
   
    <span>{category.name}</span>
  </Link>
</SidebarMenuButton>
</SidebarMenuItem>
        
          )
        })}
      </SidebarMenu>
    
      </Suspense>
    );
}

