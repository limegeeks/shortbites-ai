'use client'


export default function SkeletonCard() {
    return (
      <div className="max-w-3xl min-h-[calc(100vh-250px)] snap-center block relative mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Skeleton Image */}
        <div className="w-full h-full absolute top-0 bottom-0 bg-gray-300 animate-pulse"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 w-full p-6">
          <div className="h-6 w-3/4 bg-gray-400 animate-pulse rounded mb-4"></div>
          <div className="h-4 w-full bg-gray-400 animate-pulse rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-400 animate-pulse rounded mb-4"></div>
          <div className="h-4 w-1/3 bg-gray-400 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }