"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
        // cacheTime: 1000 * 60 * 10, // Keep inactive cache for 10 minutes
        refetchOnWindowFocus: false, // Avoid unnecessary refetches
        retry: 2, // Retry failed requests up to 2 times
        gcTime: 1000 * 60 * 10, // Garbage collect old queries after 10 minutes
      },
    },
  }));

  return <QueryClientProvider client={queryClient}>
    
    {children}
  
  </QueryClientProvider>;
}