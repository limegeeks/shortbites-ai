'use client'

import React from 'react'
import { useSidebar } from '../ui/sidebar'
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'

export default function ToggleMenuComponent() {
const {toggleSidebar} = useSidebar()


  return (
    <Button  onClick={toggleSidebar} className="rounded-full text-2xl sm:hidden   "  variant={"ghost"}>
    <Menu fontSize={32} size={48} />
    </Button>  
  )
}
