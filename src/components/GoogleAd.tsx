"use client";
import { useEffect } from "react";

declare global {
    interface Window {
      adsbygoogle: any;
    }
  }
  
export default function GoogleAd() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window?.adsbygoogle) {
        window?.adsbygoogle.push({});
      }
    } catch (err) {
      console.error("AdSense error: ", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle block text-center"
      style={{ display: "block" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-9306869059364850"
      data-ad-slot="5774246442"
    ></ins>
  );
}