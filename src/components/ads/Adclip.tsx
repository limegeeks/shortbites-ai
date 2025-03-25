'use client'
import Script from 'next/script';
import React from 'react'

export default function Adclip() {
  return (
    <div id={`ad-banner`} className="ad-container z-50 relative h-[600px] w-[160px]  block">
    {/* Load AdClerks Script */}
    <Script
      id="aclib-js"
      src="//acscdn.com/script/aclib.js"
      strategy="beforeInteractive"
      onLoad={() => {
        if (window.aclib) {
            
          window.aclib.runBanner({  zoneId: '9739454', });
        } else{
            console.log("aclip undefined");
            
        }
      }}
    />
  </div>
  )
}
