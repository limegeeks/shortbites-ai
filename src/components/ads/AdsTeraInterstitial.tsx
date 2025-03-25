"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const AdsterraInterstitial = () => {
 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      {/* Adsterra Script - Loads only when the ad is shown */}
      <Script
        src="//pl26215048.effectiveratecpm.com/ac0600f24ff4e215b7c2ee2f218923a5/invoke.js"
        strategy="afterInteractive"
      />
      
      <div className="w-full h-full">
        <div id="container-ac0600f24ff4e215b7c2ee2f218923a5"></div>
      </div>

    </div>
  );
};

export default AdsterraInterstitial;
