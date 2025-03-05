

// import { Bell, CircleUser, Menu, MenuIcon, MenuSquareIcon, UserCircle2, X } from "lucide-react"; // Icon library for the menu
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import SidebarToggle from "./SidebarToggle";
 
export default   function Header(props: any) {

const {categories} = props;
  // const [isOpen, setIsOpen] = useState(false);
console.log("categories are", categories);


  return (
    <header className="  bg-slate-50/80 backdrop-blur-lg fixed top-0 left-0 w-full shadow-md z-50">
      <div className=" mx-auto flex  items-center justify-evenly p-4">

      
        {/* Logo / Brand Name */}
        <div className="w-24 h-16">  <SidebarToggle /> </div>
        <div>
       
         <Link href="/">   <Image src="/logo.png" alt="Logo" width={250} height={80} /> </Link>
        </div>
     
          <div className="flex-1 flex   justify-center items-center"> 
   
       
          </div>

<div className="flex"> 

 
</div>
       
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex  ml-16 ">
          
        {/* <div className="h-16  my-3">  */}
          {/* <CountrySelect  />
          </div>
        <Button className="rounded-full w-16 h-16 "  variant={"ghost"}>
          <Bell fontSize={32} size={48} />
          </Button>  
        <Button  className="rounded-full w-16 text-2xl h-16 "  variant={"ghost"}>
          <UserCircle2 fontSize={32} size={48} />
          </Button>  
      */}
        </nav>



      </div>
    </header>
  );
}
