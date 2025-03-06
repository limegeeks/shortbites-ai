'use client'
import React, { useEffect } from 'react'
import { useSidebar } from './ui/sidebar'
import { usePathname } from 'next/navigation';
import { stat } from 'fs';
import { Button } from './ui/button';

export default function ClientComponent() {

    const {  toggleSidebar, isMobile, state, open } = useSidebar()

    const pathname = usePathname(); // Get current page route


console.log("path name is", pathname);

      // Close sidebar when the route changes
  useEffect(() => {

    if(isMobile == true && state == "expanded") {

        toggleSidebar()
    }

  }, [pathname]); // Runs when `pathname` changes


  return ( null
    // <Button  className='z-50' onClick={toggleSidebar}> toggle sidebar </Button>
  )
}
