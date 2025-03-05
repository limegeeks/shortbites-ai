import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import LoadingSkeltetonCard from '@/components/LoadingSkeltetonCard'

function loading() {
  return (
  
    <div className='h-screen w-screen '>  <LoadingSkeltetonCard /> </div>

  )
}

export default loading