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
import ShareBox from './ShareBox';
import { Drawer } from '@/components/ui/drawer';
import { DrawerTrigger } from './ui/drawer';
import { decode } from 'he';
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

const NewsCard = ({ title, slug, date, categories, excerpt, content, imageUrl, index }: NewsCardProps) => {
  // const [expanded, setExpanded] = useState(false);
  // const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleExpand = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);
  if (!hasMounted) return  <SkeletonCard />;

  return (
    <Card
      // ref={cardRef}
      key={index}
      className={`relative p-0 sm:h-[calc(100vh-250px)] sm:overflow-hidden  block snap-center mx-auto  ${index === 0 ? 'sm:mt-64 ' : 'sm:my-8'} 
                 rounded-none  max-w-3xl 
                 sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer `}
    >
<Drawer>
      {/* Clickable Area */}
      <motion.div  initial={{ scale: 1 }} whileTap={{ scale: 1 }}>
        {/* Image Section */}
        {imageUrl && (
          <React.Fragment> 
          <div className="relative w-full  max-h-full min-w-3xl min-h-[calc(100vh)] sm:max-h-[calc(100vh-250px)]">
            <Image 
              priority={index % 4 === 0}
              placeholder="blur"
              
              blurDataURL="/placeholder.png"
              src={imageUrl }
              alt={"Title for Short"}
                layout={"fill"}
                objectFit="fit"
              className=" h-full w-full object-cover top-0 bottom-0 absolute"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          </React.Fragment>
        )}

       {/* Collapsed View (Default) */}
       {!expanded && (
        
          <div className="absolute bottom-8 pr-8 right-4 left-4 text-white">
             
            <div className="rounded-full">{date}</div>

            {/* Categories */}
            <div className="flex my-4">
              {categories?.map((category, idx) => (
                <Link
                  href={`/topic/${category.slug}`}
                  key={idx}
                  className="bg-amber-600 text-white  no-underline
 text-lg font-bold mr-2 px-2 py-1 rounded-full"
                >
                  {decode(category.name)}
                </Link>
              ))}
            </div>

            {/* Title & Excerpt */}
            <h2 className="text-3xl text-slate-50  font-bold">{title}</h2>
            <div className="text-xl opacity-80">
              <SafeHTML html={excerpt} />
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
        )}
      </motion.div>
  {/* Expanded View */}
  <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 bg-slate-600/80 backdrop-blur-lg   rounded-2xl shadow-lg 
                       flex flex-col max-h-[100vh] overflow-hidden pt-[100.6px] sm:py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
           

            {/* Title */}
            <CardTitle className="text-3xl  text-white font-bold mb-2 sm:px-8">
              <SafeHTML html={title} />
            </CardTitle>
              <Separator />
            {/* Content - Ensures Scroll Works on Mobile */}
            <CardContent
              className="flex-1 text-white overflow-y-auto  text-xl  px-6 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-amber-600"
              style={{ WebkitOverflowScrolling: "touch" }}
            >

              <div className='h-4' />
              <SafeHTML html={content} />
              <div className='h-32' />
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Floating Action Buttons */}
      <div className="absolute bottom-1/4 right-4 flex flex-col space-y-2">
        <ActionButton
          onClick={() => setExpanded(!expanded)}
          icon={expanded ? <FoldVerticalIcon size={24} /> : <UnfoldVerticalIcon size={24} />}
        />
        <ActionButton onClick={() => {}} icon={<ThumbsUp size={24} />} />
        <DrawerTrigger className=' bg-black/50 text-white p-2 rounded-full hover:bg-200/70' ><Share size={18} /> </DrawerTrigger>
        <ActionButton onClick={() => {}} icon={<Bookmark size={24} />} />
      </div>

          <ShareBox url={'https://www.shortbites.ai/'+slug} />
      </Drawer>

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
