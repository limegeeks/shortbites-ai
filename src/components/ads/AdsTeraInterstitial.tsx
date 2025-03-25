"use client";

import { useEffect } from "react";
import Script from "next/script";

const AdsterraNativeBanner = () => {
  useEffect(() => {
    console.log("Adsterra Native Banner Loaded!");
  }, []);

  return (
    <div className="w-full my-4 flex justify-center">
      {/* Load Adsterra script */}
      <Script
        async
        data-cfasync="false"
        src="//pl26215048.effectiveratecpm.com/ac0600f24ff4e215b7c2ee2f218923a5/invoke.js"
        strategy="lazyOnload"
      />

   

     

      {/* Ad Container */}
      <div id="container-ac0600f24ff4e215b7c2ee2f218923a5" className="w-full min-h-[100vh-120px] max-h-[calc(100vh)] max-w-[728px]"></div>
      
    </div>
  );
};

export default AdsterraNativeBanner;
