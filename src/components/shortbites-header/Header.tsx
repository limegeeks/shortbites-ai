

// import { Bell, CircleUser, Menu, MenuIcon, MenuSquareIcon, UserCircle2, X } from "lucide-react"; // Icon library for the menu
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import SidebarToggle from "./SidebarToggle";
import { Button } from "../ui/button";
import { Bell, Menu, Search, SearchIcon, User, UserCircle2 } from "lucide-react";
import { CountrySelect } from "./CountrySelect";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Card, CardDescription, CardTitle } from "../ui/card";
import ToggleMenuComponent from "./ToggleMenuComponent";
import AutoSuggestSearch from "./search/AutoSuggestSearch";
 
export default   function Header(props: any) {

const {categories} = props;
  // const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="  bg-slate-50/80 backdrop-blur-lg absolute   top-0 left-0 w-full shadow-md z-50">
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
