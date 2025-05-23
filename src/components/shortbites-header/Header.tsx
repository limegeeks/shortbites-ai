

// import { Bell, CircleUser, Menu, MenuIcon, MenuSquareIcon, UserCircle2, X } from "lucide-react"; // Icon library for the menu
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Bell, ChevronDown, Menu, Search, SearchIcon, User, UserCircle2 } from "lucide-react";
import { CountrySelect } from "./CountrySelect";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Card, CardDescription, CardTitle } from "../ui/card";
import ToggleMenuComponent from "./ToggleMenuComponent";
import AutoSuggestSearch from "./search/AutoSuggestSearch";
// import { useScroll } from "@/providers/ScrollProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import  MegaMenu  from "../megamenu/MegaMenu";
 
export default   function Header(props: any) {


 
  // const { hideHeader, currentPost } = useScroll();
  const handleSelect = (value: string) => {
    if (value === "classic") {
      // window.location.href = "https://www.shortbites.ai"; // Full page navigation
    } else {
      // router.push(`/${value}`); // Internal Next.js navigation
    }
  };


const {items} = props;

// console.log("items in header are", items);

  if (!items || !items.length) return null;
  // const [isOpen, setIsOpen] = useState(false);

// console.log("hide header is", hideHeader);

  return (
          <Dialog >   
    <header className={`  header bg-slate-50/80 backdrop-blur-lg absolute   top-0 left-0 w-full shadow-md z-100 transform 
    
    `}>


      <div className=" mx-auto flex relative items-center justify-center py-6 px-4">

      
        {/* Logo / Brand Name */}
    
        <div className="sm:h-full sm:w-full">
       
         <Link href="/" >   <Image className="" src="/logo.png" alt="Logo" objectFit={"cover"} width={250} height={80} /> </Link>
        </div>
     

     <div className="flex-col gap-y-2"> 

     
        {/* Navigation Links (Desktop) */}
       

          <div className="flex-1 flex   justify-center items-center"> 
   
         <MegaMenu items={items}  />
        
          <div className="flex-1 min-w-16"> 
          <DialogTrigger  className="hover:bg-slate-100 hover:rounded-full hover:border-1 h-8 w-8 flex justify-center mt-0.5 "> 
          
       
          <Search size={18} className="border-0  h-8 " />
           
          </DialogTrigger>       
          </div>
      
        
          </div>



</div>



      </div>
    </header>
      <AutoSuggestSearch />
            </Dialog>
  );
}
