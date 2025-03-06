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

      <body
        className={`
        antialiased dark:bg-slate-800 dark:text-white`}
      >

        <QueryProvider>
          <SidebarProvider>
   <ClientComponent />

            <Header categories={categories} />
            
                     
            <AppSidebar categories={categories} />
           
            {children}
          </SidebarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
