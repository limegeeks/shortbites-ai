import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shortbites-header/Header";
import { getCategories } from "@/services/categories";
import Link from "next/link";
import QueryProvider from "@/providers/QueryClientProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Suspense } from "react";
import SkeletonCard from "@/components/SkeletonCard";
import categories from '@/data/categories.json'
import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { headers } from "next/headers";
import { isMobile } from "@/lib/utils";
import ClientComponent from "@/components/ClientComponent";
import { ScrollProvider } from "@/providers/ScrollProvider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Shortbites AI",
  description: "Daily Dose of News as shorts",
};

// ${geistSans.variable} ${geistMono.variable}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const categories = await getCategories();



  
  return (
    <html lang="en">
   <head>
   <meta name="google-adsense-account" content="ca-pub-9306869059364850" />

        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9306869059364850"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      
      </head>
      <body
        className={` scrolled-up 
        antialiased dark:bg-slate-800 dark:text-white`}
      >

        <QueryProvider>

          <SidebarProvider>
   <ClientComponent />
   <ScrollProvider>
            <Header categories={categories} />
            
                     
            <AppSidebar categories={categories} />
   
            <div className="w-[160px] h-[600px] mx-auto">
      <Script
        id="ad-options"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '8b7ef591826364dab76dce8a07e8e70f',
              'format' : 'iframe',
              'height' : 600,
              'width' : 160,
              'params' : {}
            };
          `,
        }}
      />
      <Script
        id="ad-script"
        strategy="afterInteractive"
        src="//www.highperformanceformat.com/8b7ef591826364dab76dce8a07e8e70f/invoke.js"
      />
    </div>  
            {children}
            <Toaster />
            </ScrollProvider>
          </SidebarProvider>
     
        </QueryProvider>
      </body>
    </html>
  );
}
