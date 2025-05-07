// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarGroupLabel,
//     SidebarHeader,
//     SidebarMenu,
//     SidebarMenuButton,
//   } from "@/components/ui/sidebar"
// import CategoriesList from "./CategoryList"
import Link from "next/link";
import { isMobile } from "@/lib/utils";
import { headers } from "next/headers";
import Script from "next/script";
   

// const CategoriesList = ({ categories }) => {
//   return (
//     <ul className="space-y-2">
//       {categories.map((category) => (
//         <li key={category.id}>
//           <div>
//             <h3 className="text-xl font-semibold">
//               <Link href={`/category/${category.slug}`} passHref>
//                 <a className="hover:text-amber-500 focus:text-amber-500 text-slate-700">{category.name}</a>
//               </Link>
//             </h3>
//             {category.children && category.children.length > 0 && (
//               <ul className="pl-4 mt-2 space-y-1">
//                 {category.children.map((subCategory) => (
//                   <li key={subCategory.id}>
//                     <Link href={`/category/${category.slug}/${subCategory.slug}`} passHref>
//                       <a className="text-slate-600 hover:text-amber-400">{subCategory.name}</a>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }

// const CategoriesList = ({ categories } : {categories: any[]}) => {
//   return (
//     <ul className="space-y-2">
//       {categories.map((category) => (
//         <li key={category.id}>
//           <div>
//             <h3 className="text-xl font-semibold">
//               <Link href={`/category/${category.slug}`} passHref>
//                 <a className="hover:text-amber-500 focus:text-amber-500 text-slate-700">{category.name}</a>
//               </Link>
//             </h3>
//             {category.children && category.children.length > 0 && (
//               <ul className="pl-4 mt-2 space-y-1">
//                 {category.children.map((subCategory: any) => (
//                   <li key={subCategory.id}>
//                     <Link href={`/category/${category.slug}/${subCategory.slug}`} passHref>
//                       <a className="text-slate-600 hover:text-amber-400">{subCategory.name}</a>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }


// export const AppSidebar = ({ categories, mobileCheck } : {categories: any[] , mobileCheck: any}) => {
//   return (
//     <Sidebar defaultValue="open" className="bg-slate-50" side={mobileCheck ? 'right' : 'left'}>
//       <SidebarContent className="bg-slate-50">
//         <SidebarGroup className="mt-48">
//           <SidebarMenu>
//             <SidebarMenuButton asChild>
//               <Link className="font-bold text-xl hover:text-amber-500 focus:text-amber-500 text-slate-700" href="/">
//                 Latest
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenu>
//         </SidebarGroup>

//         {/* Categories Section */}
//         <SidebarGroup className="text-center mx-0">
//           <SidebarGroupLabel className="text-2xl font-bold py-6 my-4 uppercase text-slate-900 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 px-4">
//             Topics
//           </SidebarGroupLabel>
//           <CategoriesList categories={categories} />
//         </SidebarGroup>

//       </SidebarContent>

//       <SidebarFooter />
//     </Sidebar>
//   )
// }


import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarGroupLabel, SidebarFooter } from '@/components/ui/sidebar'

const CategoriesList = ({ categories } : {categories: any}) => {
  return (
    <ul className="space-y-2">
      {categories.map((category : any) => (
        <li key={category.id}>
          <div>
            <h3 className="text-xl font-semibold">
              <Link className="hover:text-amber-500 focus:text-amber-500 text-slate-700"  href={`/category/${category.slug}`} passHref>
                {/* Link component ensures no <a> nesting */}
                <span >{category.name}</span>
              </Link>
            </h3>
            {/* Check if there are child categories */}
            {category.children && category.children.length > 0 && (
              <ul className="pl-4 mt-2 space-y-1">
                {category.children.map((subCategory : any) => (
                  <li key={subCategory.id}>
                    {/* Plain <a> tag for child categories to avoid nesting <a> */}
                    <Link className="hover:text-amber-400" href={`/category/${subCategory.slug}`} passHref>
                      <span className="text-slate-600 ">{subCategory.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export const AppSidebar = ({ categories, mobileCheck } : {categories: any, mobileCheck : any}) => {
  return (
    <Sidebar defaultValue="open" className="bg-slate-50 z-0" side={mobileCheck ? 'right' : 'left'}>
      <SidebarContent className="bg-slate-50">
        <SidebarGroup className="mt-36">
          <SidebarMenu className="justify-center mx-auto text-center">
      
              <Link className="font-bold text-xl hover:text-amber-500 focus:text-amber-500 text-slate-700" href="/">
                <span className="text-2xl">  Latest </span>
              </Link>
     
          </SidebarMenu>
        </SidebarGroup>

        {/* Categories Section */}
        <SidebarGroup className="text-center mx-0">

          <CategoriesList categories={categories} />
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}


