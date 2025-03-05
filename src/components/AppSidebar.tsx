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
   
  export function AppSidebar(props: any) {


    const {categories} = props;
    return (
      <Sidebar defaultValue={"open"} side="left">
 
        <SidebarContent>

            <SidebarGroup className="mt-32"> 
            <SidebarMenu>
            <SidebarMenuButton  asChild>
                <Link className="font-bold text-xl hover:text-amber-500 focus:text-amber-500 text-slate-700" href={"/"}> Latest </Link>
                </SidebarMenuButton>
            </SidebarMenu>
            </SidebarGroup>
          <SidebarGroup className="text-center" >
            <SidebarGroupLabel className="text-xl font-bold py-4 my-4  uppercase text-slate-900 "> Topics </SidebarGroupLabel>
            <CategoriesList categories={categories} />
            </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }