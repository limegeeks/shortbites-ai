"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Share } from "lucide-react";

export default function ShareSheet() {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Share className="w-4 h-4 mr-2" /> Share
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="p-4">
        <h2 className="text-lg font-semibold mb-2">Share this link</h2>
        <div className="flex items-center space-x-2">
          <Input value={shareUrl} readOnly className="flex-1" />
          <Button onClick={handleCopy} variant="secondary">
            {copied ? "Copied!" : <Copy className="w-4 h-4" />}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
