'use client'
import Script from 'next/script';
import React from 'react'

export default function Adclip() {
  return (
    <div id={`ad-banner`} className="ad-container relative block">
    {/* Load AdClerks Script */}
    <Script
      id="aclib-js"
      src="//acscdn.com/script/aclib.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (window.aclib) {
          window.aclib.runBanner({   zoneId: '9739430', });
        }
      }}
    />
  </div>
  )
}
