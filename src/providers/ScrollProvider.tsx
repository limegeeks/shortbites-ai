"use client";
import { createContext, useContext, useState } from "react";

// Create Context
const ScrollContext = createContext({
  hideHeader: false,
  currentPost: null as number | null,
  setHideHeader: (hide: boolean) => {},
  setCurrentPost: (postId: number | null) => {},
});

// Context Provider
export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [hideHeader, setHideHeader] = useState(false);
  const [currentPost, setCurrentPost] = useState<number | null>(null);


  
  return (
    <ScrollContext.Provider value={{ hideHeader, setHideHeader, currentPost, setCurrentPost }}>
      {children}
    </ScrollContext.Provider>
  );
}

// Custom Hook
export function useScroll() {
  return useContext(ScrollContext);
}
