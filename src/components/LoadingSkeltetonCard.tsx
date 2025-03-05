import React from 'react'
import SkeletonCard from './SkeletonCard'
import { Separator } from './ui/separator'

function LoadingSkeltetonCard() {
  return (
    <div className=' w-full   justify-center align-middle  h-screen '>



<div className=' h-[calc(100vh-300px)] align-middle self-center justify-center '>

        <SkeletonCard />
 

        </div>







</div>
  )
}

export default LoadingSkeltetonCard