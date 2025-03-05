import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import LoadingSkeltetonCard from '@/components/LoadingSkeltetonCard'

function loading() {
  return (
  
      <div className='h-screen w-screen flex justify-center mt-32'>  {[...new Array(3)].map(function(item,index) {
        return (<SkeletonCard />)
       })}
       </div>

  )
}

export default loading