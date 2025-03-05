"use client";
import { useEffect } from "react";

const AdComponent = (props: any) => {
//   useEffect(() => {
//     try {
//       if (typeof window !== "undefined" && window.adsbygoogle) {
//         window.adsbygoogle.push({});
//       }
//     } catch (e) {
//       console.error("AdSense error:", e);
//     }
//   }, []);
//   useEffect(() => {
//     try {
//       if (typeof window !== "undefined" && window.adsbygoogle) {
//         window.adsbygoogle.push({});
//       }
//     } catch (e) {
//       console.error("AdSense error:", e);
//     }
//   }, []);

  return (
 

       <div  className= {`max-w-3xl  min-h-[calc(100vh-250px)] snap-center  my-32 snap-always block relative mx-auto  bg-white rounded-lg shadow-lg`}>
          {/* Full-screen Featured Image */}
          <div className="absolute top-0 bottom-0 block overflow-hidden w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
    
      <div className="shorts-ad">
       <ins
         className="adsbygoogle"
         style={{ display: "block", width: "100%", height: "100%" }}
         data-ad-client="ca-pub-XXXXXX"
         data-ad-slot="YYYYYY"
         data-ad-format="fluid"
       ></ins>

      <h2 className="text-center font-bold text-2xl top-1/2"> Ad is supposted to come here  . Ad Index is {props.index} </h2>
     </div>
   
    
        </div>
  );
};

export default AdComponent;