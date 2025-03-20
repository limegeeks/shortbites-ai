'use client'
import { ReactNode, useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, MessageCircle, Share, Bookmark, X, UnfoldVerticalIcon, FoldVerticalIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
// import SafeHTML from './safehtml/Html';
import React from 'react';
import SkeletonCard from './SkeletonCard';
import { Separator } from '@radix-ui/react-separator';
// Dynamically import SafeHTML to fix hydration issues
const SafeHTML = dynamic(() => import('./safehtml/Html'), { ssr: false });
export interface Category {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface NewsCardProps {
  title: string;
  slug: string;
  date: string;
  categories: Category[];
  tags?: Tag[];
  excerpt: string;
  content: string;
  imageUrl?: string;
  index: number;

}

const NewsCard = ({ title,   excerpt, content, imageUrl, index }: NewsCardProps) => {
  // const [expanded, setExpanded] = useState(false);
  // const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const link = "https://classic.shortbites.ai"
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleExpand = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);
  if (!hasMounted) return  <SkeletonCard />;


  console.log("in ad component ");
  
  return (
    <Card
      // ref={cardRef}
      key={index}
      className={`relative p-0 sm:h-[calc(100vh-250px)] sm:overflow-hidden  block snap-center mx-auto  ${index === 0 ? 'sm:mt-64 ' : 'sm:my-8'} 
                 rounded-none  max-w-3xl 
                 sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer`}
    >
      
      {/* Clickable Area */}
      <motion.div  initial={{ scale: 1 }} whileTap={{ scale: 1 }}>
        {/* Image Section */}
     
          <React.Fragment> 
          <div className="relative w-full overflow-hidden  max-h-full min-w-3xl min-h-[calc(100vh)] sm:max-h-[calc(100vh-250px)]">
            <Image 
              // priority={index % 4 === 0}
              // placeholder="blur"
              
              // blurDataURL="/ad.png"
              src={"/ad.gif"}
              alt={"Post your ad with us"}
              width={768}
              height={1201}
                layout={"fit"}
                objectFit="fit"
              className=" h-full w-full object-fit top-0 bottom-0 absolute"
            />

{/* <video  className=' h-full w-full object-cover top-0 bottom-0 sticky' loop  autoPlay >
  <source src="/advideo.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video> */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
          </div>
          </React.Fragment>
     

       {/* Collapsed View (Default) */}
       {!expanded && (


<React.Fragment> 

<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>


          <div className="absolute bottom-8 right-4 left-4 text-white">
           
        

            {/* Title & Excerpt */}
            <h2 className="text-xl font-bold">   🚀 Advertise on ShortBites.ai – High Engagement, Maximum Impact!</h2>
            <div className="text-sm opacity-80">
            ShortBites.ai delivers **quick, engaging news in a Shorts-style format**—and now, your brand can be a part of it!
            With users actively swiping through bite-sized updates, your **ads get seen, not ignored**.

            </div>
            <div> 
              <Link href={link} > 
                  Visit Site
              </Link>
            </div>
            {/* Read More Button */}
            <div className="flex justify-center my-4">
              <Button
                onClick={toggleExpand}
                variant="ghost"
                size="sm"
                className="text-white self-center"
              >
                Read More
              </Button>
            </div>
          </div>
       
          </React.Fragment>
        )}
      </motion.div>
  {/* Expanded View */}
  <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 bg-slate-500/80 backdrop-blur-lg  rounded-2xl shadow-lg 
                       flex flex-col max-h-[100vh] overflow-hidden pt-[100.6px] sm:py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
           

            {/* Title */}
            <CardTitle className="text-xl  text-white font-bold mb-2 sm:px-8">
              <h2> 🚀 Advertise on ShortBites.ai – High Engagement, Maximum Impact! </h2>
            </CardTitle>
              <Separator />
            {/* Content - Ensures Scroll Works on Mobile */}
            <CardContent
              className="flex-1 text-white overflow-y-auto  px-6 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-amber-600"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
<div className='h-4' />
<div className="mt-6 space-y-4">
  <h3 className="text-xl font-semibold">📈 <span className="font-bold">Why Advertise with Us?</span></h3>
  <ul className="list-disc list-inside space-y-2">
    <li>🔥 <span className="font-bold">High Engagement</span> – Ads appear in a Shorts-style experience.</li>
    <li>⏳ <span className="font-bold">Short & Impactful</span> – Grab attention in <span className="font-bold">seconds</span>.</li>
    <li>🎯 <span className="font-bold">Targeted Reach</span> – Get in front of the right audience.</li>
    <li>💰 <span className="font-bold">Better ROI</span> – Native ads lead to <span className="font-bold">higher conversions</span>.</li>
  </ul>
</div>

<div className="mt-6 space-y-4">
  <h3 className="text-xl font-semibold">📢 <span className="font-bold">Ad Formats We Offer</span></h3>
  <ul className="list-disc list-inside space-y-2">
    <li>🎬 <span className="font-bold">Shorts-Style Video Ads</span> – 5 to 15-second engaging video placements.</li>
    <li>📰 <span className="font-bold">Sponsored Shorts</span> – Blend your brand with trending news.</li>
    <li>📊 <span className="font-bold">Banner Ads</span> – High-visibility static or animated banners.</li>
    <li>🚀 <span className="font-bold">Call-to-Action (CTA) Cards</span> – Instantly direct users to your service.</li>
  </ul>
</div>

<p className="mt-6 text-lg text-center font-black">
  Don’t just advertise—engage! Place your ads on <span className="font-bold">ShortBites.ai</span> and watch your brand grow.
</p>

          <div className="mt-6 flex justify-center">
            <Link href={link} className="px-6 py-3 text-lg" >
              📞 Get Started Today!
            </Link>
          </div>
              <div className='h-32' />
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>

    <div className="absolute bottom-1/4 right-4 flex flex-col space-y-2">
        {expanded == true ?  <ActionButton onClick={() => {setExpanded(!expanded)}} icon={ <FoldVerticalIcon size={24} /> } /> :  <ActionButton  onClick={() => {setExpanded(!expanded)}}  icon={ <UnfoldVerticalIcon size={24} /> } /> } 
        <ActionButton onClick={() => {}} icon={<ThumbsUp size={24} />} />
        <ActionButton onClick={() => {}} icon={<MessageCircle size={24} />} />
        <ActionButton onClick={() => {}} icon={<Share size={24} />} />
        <ActionButton onClick={() => {}} icon={<Bookmark size={24} />} />
    
      </div>

    </Card>
  );
};

export default NewsCard;

interface ActionButtonProps {
  icon: ReactNode;
  onClick: () => void;
}

function ActionButton({ icon, onClick }: ActionButtonProps) {
  return (
    <Button onClick={onClick} variant="ghost" size="icon" className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
      {icon}
    </Button>
  );
}
