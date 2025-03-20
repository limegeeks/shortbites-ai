
'use client'
// import { Bell, CircleUser, Menu, MenuIcon, MenuSquareIcon, UserCircle2, X } from "lucide-react"; // Icon library for the menu
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect } from "react";
import SidebarToggle from "./SidebarToggle";
import { Button } from "../ui/button";
import { Bell, ChevronDown, Menu, Search, SearchIcon, User, UserCircle2 } from "lucide-react";
import { CountrySelect } from "./CountrySelect";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Card, CardDescription, CardTitle } from "../ui/card";
import ToggleMenuComponent from "./ToggleMenuComponent";
import AutoSuggestSearch from "./search/AutoSuggestSearch";
import { useScroll } from "@/providers/ScrollProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import { useRouter } from "next/router";
 
export default   function Header(props: any) {

  const { hideHeader, currentPost } = useScroll();
  const handleSelect = (value: string) => {
    if (value === "classic") {
      window.location.href = "https://classic.shortbites.ai"; // Full page navigation
    } else {
      // router.push(`/${value}`); // Internal Next.js navigation
    }
  };
console.log("hide header is", hideHeader);
console.log("current post is", currentPost);

const {categories} = props;
  // const [isOpen, setIsOpen] = useState(false);

console.log("hide header is", hideHeader);

  return (
    <header className={`  header bg-slate-50/80 backdrop-blur-lg absolute   top-0 left-0 w-full shadow-md z-50 transform ${
        hideHeader ? "-translate-y-full   transition-all duration-500  slide-in-from-bottom " : "translate-y-0    transition-all duration-500  slide-out-to-bottom" }
    `}>
      <div className=" mx-auto flex  items-center justify-evenly p-4">

      
        {/* Logo / Brand Name */}
    
        <div className="sm:h-full sm:w-full">
       
         <Link href="/" >   <Image className="" src="/logo.png" alt="Logo" objectFit={"cover"} width={250} height={80} /> </Link>
        </div>
     
          <div className="flex-1 flex   justify-center items-center"> 
   
       
          </div>

<div className="flex"> 

 
</div>
<Dialog >      
<AutoSuggestSearch />
        {/* Navigation Links (Desktop) */}
        <nav className="  flex flex-row md:flex sm:gap-4   sm:mt-4 sm:ml-16 ">
       
  
     
        <div className=" hidden sm:block "> 
          <CountrySelect  />
          </div>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
         Select Style  <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      <DropdownMenuItem disabled onClick={() => handleSelect("modern")}>Shorts</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("classic")}>Classic</DropdownMenuItem>
       
      </DropdownMenuContent>
    </DropdownMenu>
          <DialogTrigger  className="hover:bg-slate-100 hover:rounded-full hover:border-1 h-8 w-8 flex justify-center mt-0.5 "> 
          
       
          <Search size={18} className="border-0  h-8 " />
           
          </DialogTrigger>       

        {/* <Button className="rounded-full  "  variant={"ghost"}>
          <Bell fontSize={32} size={48} />
          </Button>  
        <Button  className="rounded-full text-2xl   "  variant={"ghost"}>
          <User fontSize={32} size={48} />
          </Button>   */}
      
          <ToggleMenuComponent />
       
        </nav>
         
        </Dialog>

      </div>
    </header>
  );
}
