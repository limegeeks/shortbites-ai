import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import LoadingSkeltetonCard from '@/components/LoadingSkeltetonCard'

function loading() {
  return (
   <div className='h-screen w-screen flex justify-center'> <p > Page is loading </p> </div>
  //  <LoadingSkeltetonCard />
  )
}

export default loading