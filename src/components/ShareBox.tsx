 'use client'
 import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

// import { Copy, Facebook, Twitter, Linkedin, } from "lucide-react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
// React-Share components
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  RedditShareButton,
  EmailShareButton,
  InstapaperShareButton,
} from "react-share";

// React-Icons (for consistent icons)
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaPinterest,
  FaTelegram,
  FaReddit,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { Copy } from "lucide-react";
export default function ShareBox({ url } : {url: string}) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast("Url Successfully Copied. ")
    setTimeout(() => setCopied(false), 2000);
  };

  return (

      <DrawerContent className="p-4 space-y-4 bg-slate-50">

        <DialogTitle className="text-lg font-semibold text-center">
   Share this post
           </DialogTitle>
        <DialogDescription  asChild > 

          <div className="flex gap-4 mb-32 mx-auto">
          <FacebookShareButton url={url}>
            <FaFacebook className="w-8 h-8 text-blue-600 hover:scale-110 transition" />
          </FacebookShareButton>

          <TwitterShareButton url={url}>
            <FaTwitter className="w-8 h-8 text-blue-400 hover:scale-110 transition" />
          </TwitterShareButton>

          <WhatsappShareButton url={url}>
            <FaWhatsapp className="w-8 h-8 text-green-500 hover:scale-110 transition" />
          </WhatsappShareButton>

          <LinkedinShareButton url={url}>
            <FaLinkedin className="w-8 h-8 text-blue-700 hover:scale-110 transition" />
          </LinkedinShareButton>

          <PinterestShareButton url={url}  media={""}>
            <FaPinterest className="w-8 h-8 text-red-500 hover:scale-110 transition" />
          </PinterestShareButton>

          <TelegramShareButton url={url}>
            <FaTelegram className="w-8 h-8 text-blue-500 hover:scale-110 transition" />
          </TelegramShareButton>

          <RedditShareButton url={url}>
            <FaReddit className="w-8 h-8 text-orange-500 hover:scale-110 transition" />
          </RedditShareButton>

          <EmailShareButton url={url}>
            <FaEnvelope className="w-8 h-8 text-gray-700 hover:scale-110 transition" />
          </EmailShareButton>

          <InstapaperShareButton url={url}>
            <FaInstagram className="w-8 h-8 text-pink-500 hover:scale-110 transition" />
          </InstapaperShareButton>
                {/* Copy Link Button */}
        <div className="flex justify-center mt-4">
          <Button
            onClick={handleCopy}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Copy className="w-4 h-4" /> Copy Link
          </Button>
        </div>
            
             </div>
        
        </DialogDescription>

  
     
      </DrawerContent>

  );
}
