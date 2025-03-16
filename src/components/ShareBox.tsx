 'use client'
 import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Copy, Facebook, Twitter, Linkedin, } from "lucide-react";

export default function ShareBox({ url }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (

      <DrawerContent className="p-4 space-y-4">
        <h3 className="text-lg font-semibold">Share this post</h3>
        <div className="flex gap-4">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-blue-600" />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-blue-400" />
          </a>
          <a href={`https://www.linkedin.com/shareArticle?url=${url}`} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-blue-700" />
          </a>
        
        </div>
        <Button onClick={handleCopy} variant="outline" className="flex items-center gap-2">
          <Copy className="w-4 h-4" /> {copied ? "Copied!" : "Copy Link"}
        </Button>
      </DrawerContent>

  );
}
