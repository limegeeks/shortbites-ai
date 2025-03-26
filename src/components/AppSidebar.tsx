import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
import CategoriesList from "./CategoryList"
import Link from "next/link";
import { isMobile } from "@/lib/utils";
import { headers } from "next/headers";
import Script from "next/script";
   
  export async function AppSidebar(props: any) {


    const {categories} = props;

    const userAgent = (await headers()).get("user-agent") || ""; 
    const mobileCheck = isMobile(userAgent);
    
    return (
      <Sidebar defaultValue={"open"} className="bg-slate-50" side={mobileCheck == true ? 'right' : 'left'}>
 
        <SidebarContent className="bg-slate-50">

            <SidebarGroup className="mt-32"> 
            <SidebarMenu>
            <SidebarMenuButton  asChild>
                <Link className="font-bold text-xl hover:text-amber-500 focus:text-amber-500 text-slate-700" href={"/"}> Latest </Link>
                </SidebarMenuButton>
            </SidebarMenu>
            </SidebarGroup>
          <SidebarGroup className="text-center mx-0" >
            <SidebarGroupLabel className="text-2xl font-bold py-6 my-4  uppercase text-slate-900 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500   px-4   "> Topics </SidebarGroupLabel>
            <CategoriesList categories={categories} />
            </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarContent className="block relative">
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }