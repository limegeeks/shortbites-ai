'use client'
import { ReactNode, useEffect, useRef,   useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react';
import { motion } from "framer-motion";
import { ThumbsUp, MessageCircle, Share, Bookmark, ArrowLeft, X, ArrowUp, ArrowDown, ListCollapseIcon, ExpandIcon, FoldVertical, FoldVerticalIcon, UnfoldVerticalIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import SafeHTML from './safehtml/Html';


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
const  NewsCard = React.memo( ({  title , slug, date, categories, tags,  excerpt, content, imageUrl , index} : NewsCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
console.log("image url is", imageUrl);
   

  const router = useRouter()
  const elementRef = useRef(null);
  const [expanded, setExpanded] = useState(false);







// useEffect(() => {
//   router.replace(`/latest/${slug}`, undefined, { shallow: true });
// }, [index]);


// 
  return (


    <Card  ref={elementRef} key={index}  className={`relative snap-center snap-always mx-auto ${index == 0 ? 'sm:mt-48 sm:mb-8' : 'sm:my-8'}  rounded-none  min-h-[calc(100vh)] sm:min-h-[calc(100vh-250px)]  max-w-3xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer`}>
      <motion.div
        onClick={() => setExpanded(!expanded)}
        initial={{ scale: 1 }}
        whileTap={{ scale: 1 }}
      >
       

        {imageUrl && <React.Fragment>  <Image  priority={index % 4 == 0 ? true : false} placeholder={"blur"} blurDataURL='/placeholder.png' src={imageUrl} alt={title} layout="fill" objectFit="cover" className="sm:rounded-t-2xl object-cover absolute bottom-0" />
         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
         </React.Fragment> 
        }
       
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
      
      {!expanded &&  ( <div className="absolute bottom-8 right-4 left-4 text-white">

        <div>      <div className="rounded-full">
         {date}
      </div> 
        <div className='flex'> 
        <div key={index} className="my-4">
          {categories?.map((category: any, index: number) => {
            return (
             
                <Link href={`/topic/${category.slug}`} key={index.toString()} className='bg-amber-600 text-white text-xs font-bold mr-2 px-2 py-1 rounded-full' > 
                {category.name} 
                </Link>
              
          )
        })}
          </div>
        </div>
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="text-sm opacity-80">
            
            <SafeHTML html={excerpt} />
            </div>
            <div className="flex justify-center my-4">
            <Button onClick={() => setExpanded(!expanded)} variant="ghost" size="sm" className="text-white self-center  place-self-end">
              Read More
            </Button>
            </div>
        </div>
        </div>
        ) 
        
        
        }
       
       
      </motion.div>

      {expanded && (
        <motion.div
          className="absolute inset-0 bg-slate-600/60  backdrop-blur-md p-4  rounded-2xl shadow-lg flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className='flex flex-col  h-full  justify-center items-center '> 
            <div className='flex-1'> 
              <Button  onClick={() => setExpanded(!expanded)}> <X size={24} /></Button>
          <CardTitle className="text-2xl prose max-w-none sticky top-8  text-slate-50  marker:text-amber-500 font-bold mb-2">
         
            <SafeHTML html={title} />
            </CardTitle>
          <CardContent className="max-h-full overflow-y-auto text-white  marker:text-amber-500   prose prose-sm md:prose-lg lg:prose-xl prose-invert max-w-none pr-2">
           
            <SafeHTML html={content} />
        
            </CardContent>
            </div>
          </div>
        </motion.div>
      )}

      <div className="absolute bottom-1/4 right-4 flex flex-col space-y-2">
        {expanded == true ?  <ActionButton onClick={() => {setExpanded(!expanded)}} icon={ <FoldVerticalIcon size={24} /> } /> :  <ActionButton  onClick={() => {setExpanded(!expanded)}}  icon={ <UnfoldVerticalIcon size={24} /> } /> } 
        <ActionButton onClick={() => {}} icon={<ThumbsUp size={24} />} />
        <ActionButton onClick={() => {}} icon={<MessageCircle size={24} />} />
        <ActionButton onClick={() => {}} icon={<Share size={24} />} />
        <ActionButton onClick={() => {}} icon={<Bookmark size={24} />} />
    
      </div>
    </Card>
    // <div ref={elementRef} className= {`max-w-3xl ${index == 0 ? 'mt-48 ' : ''} min-h-[calc(100vh-250px)] snap-center  snap-always block relative mx-auto my-8 bg-white rounded-lg shadow-lg`}>
    //   {/* Full-screen Featured Image */}
    //   <div className="absolute top-0 bottom-0 block overflow-hidden w-full h-full">
    //      {imageUrl  &&  <Image   placeholder={"blur"}    priority={false} blurDataURL={"/placeholder.png"} width={800} height={1200} src={imageUrl  || ""} alt={title || "title"} className="  bottom-0 z-10  h-full object-cover" /> }
    //     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    //   </div>


    //     <div className="absolute bottom-0">
    //   {/* Title and Excerpt */}
    //   <div className="px-6 py-4">
    //     <h2 className="text-3xl font-bold text-white">{title}</h2>


    //     {isCollapsed ?     <p className="mt-2 text-lg text-white" dangerouslySetInnerHTML={{__html:excerpt}} />: null}
      
    //   </div>

    //   {/* Collapsible Content */}
    //   <div className="px-6 pb-4">
    //     {isCollapsed ?   <button 
    //       onClick={() => setIsCollapsed(!isCollapsed)}
    //       className="text-blue-500 hover:text-blue-700"
    //     >
    //       {isCollapsed ? 'Read More' : 'Show Less'}
    //     </button>  :  null}  
    //     {!isCollapsed && <div className='overflow-y-scroll min-h-screen'><p className="mt-4 text-slate-50 text-sm font-medium" dangerouslySetInnerHTML={{__html:content}} />  </div> }

    //     {isCollapsed ?  null  :   <button 
    //       onClick={() => setIsCollapsed(!isCollapsed)}
    //       className="text-blue-500 hover:text-blue-700"
    //     >
    //       {isCollapsed ? 'Read More' : 'Show Less'}
    //     </button>}  
    //   </div>
    //   </div>

    // </div>
  );


});

export default NewsCard;
interface ActionButtonProps {
  icon: ReactNode;
  onClick: () => void;
}

function ActionButton({ icon  , onClick } : ActionButtonProps) {
  return (
    <Button onClick={onClick} variant="ghost" size="icon" className="bg-black/50 text-white p-2 hover:text-white rounded-full hover:bg-black/70">
      {icon}
    </Button>
  );
}
