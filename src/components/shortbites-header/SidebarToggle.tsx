'use client';
import React from 'react'
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

export default function SidebarToggle(props: any) {

    const {toggleSidebar,isMobile, state} = useSidebar();


  return (
           <Button onClick={toggleSidebar} className="rounded-full  sm:hidden w-16 h-16 mx-2"  variant={"ghost"}> <Menu   fontSize={32} size={48} /> </Button>

  )
}
