

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
 
export default   function Header(props: any) {

const {categories} = props;
  // const [isOpen, setIsOpen] = useState(false);
console.log("categories are", categories);


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
<Dialog>      
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
        <DialogContent className=" absolute  border-0 left-1/2 transform  mx-auto  md:max-w-1/2 z-50 p-4  shadow-lg rounded-lg">
    <DialogHeader>
      <DialogTitle>Search What you are looking for </DialogTitle>
      <DialogDescription>
       

      <Input  placeholder="Search" className="placholder:text-4xl  focus:text-black  p-4 w-full  rounded-md border h-12 focus:outline-none text-4xl my-4   bg-white/30 focus:bg-white"  />
    
    <div className="overflow-auto h-[calc(100vh-300px)]"> 
    {[...new Array(10)].map(function(item, index) {

      return ( <Link key={index} href={"#"} >
<div  className="p-4 rounded-none m-2  bg-white dark:bg-slate-900  dark:text-slate-50  opacity-95 hover:opacity-100 cursor-pointer">
<CardTitle className="text-2xl font-bold  first-letter:text-amber-600" > 
          Card Title 
</CardTitle>
      <CardDescription>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas, distinctio praesentium a numquam odit unde. Pariatur distinctio aspernatur suscipit, repellendus voluptatem unde blanditiis, facere, saepe consequuntur minus assumenda architecto.
      </CardDescription>
      </div>
      </Link>)
    })}
         </div>
    
      </DialogDescription>
    </DialogHeader>
  </DialogContent>

        </Dialog>

      </div>
    </header>
  );
}
