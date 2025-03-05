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


  const categories = await getCategories();

console.log("categories are", categories);



  return (
    <html lang="en">

      <body
        className={`
        antialiased dark:bg-slate-800 dark:text-white`}
      >
        <QueryProvider>
          <SidebarProvider>


            <Header categories={categories} />
            <Suspense fallback={<SkeletonCard />}>
            <AppSidebar categories={categories} />
            </Suspense>
            {children}
          </SidebarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
