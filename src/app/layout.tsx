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
import { FooterLegalMenu } from "@/components/FooterLegal";

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

export async function getMainMenu() {
  const res = await fetch("http://localhost:3000/api/menu/");
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
}


// ${geistSans.variable} ${geistMono.variable}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const categories = await getCategories();

  const menuItems = await getMainMenu()

  
  return (
    <html lang="en">
   <head>
   <meta name="google-adsense-account" content="ca-pub-9306869059364850" />
   {/* Load AdClerks Library */}

      </head>
      <body
        className={` scrolled-up 
        antialiased dark:bg-slate-800 dark:text-white`}
      >

        <QueryProvider>

       
   {/* <ClientComponent /> */}
   <ScrollProvider>
            <Header items={menuItems ?? []} />
            

            <div className="sm:hidden"> 
                     
            {/* <AppSidebar categories={categories} mobileCheck={undefined} /> */}
   </div>
      
            {children}
            <Toaster />
            </ScrollProvider>
        
          <FooterLegalMenu />
        </QueryProvider>
      </body>
    </html>
  );
}
