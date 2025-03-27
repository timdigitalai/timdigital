import React from "react";
import Image from "next/image";
import Heading from "../atoms/Heading";
import '../../app/globals.css'
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Header from "./Header";
import Circual from "../atoms/Circual";
import Steps from "../molecules/Steps";
function Banner() {
  return (

    // top session

    <div className="main-banner absolute">
<div className="machine-bort  ">
<div className="div grid grid-cols-[15%_83%] gap-[6] m-auto max-w-[90%]">
<div className="py-[50px]">
         <img
        src="/image/airoplan.png" 
        className="w-[100%]"
        alt="airoplan"
      />
    </div>
   <div className="grid grid-cols-[30%_30%_24%_20%] gap-[6] m-auto  main-banner">

    {/* bussnius side  */}

    <div className="bussnius-side ">
   <div className="bussnius rounded-[20px]">
        <div className="heading flex items-center justify-center gap-[5px]">
           <div className="">
           <img 
                width={38}
                height={38}                 
                 src="/image/hnd.png"
                 alt="hand"
            />
           </div>
            <Heading level={2}>BUSINESS LOGIN</Heading>
        </div>
        <div className="bussnius-g">
    <div className="text-center"><Heading level={3}>TRAVEL ASSISTANT</Heading></div>
  <div className="bussnius-g-main flex items-center gap-2">
    {/* img Container */}
    <div className="g-im h-[165px] flex-shrink-0">
      <img
        className="h-[165px]"
        alt="girl"
        src="/image/left-g.png"
        
      />
    </div>

    {/* Text & Buttons */}
    <div className="buss-left pl-[8px] flex flex-col gap-2">
      <Paragraph>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Paragraph>
      <div className="btn flex gap-2 ">
      <Button variant="signup">LOGIN</Button>
      <Button variant="signup">LOGIN</Button>
      </div>
    </div>
  </div>
</div>
    </div>

    {/* bussnius bottom */}
<div className="main mt-[10px] gap-[10px] grid grid-cols-2 ">

<div className="ASSISTANT">
<div className="assistant-left">
<div className="assistant- h-[80px] flex flex-col  text-center ">
    <div className="pt-[20px]">
    <Heading level={5}>TRAVEL ASSISTANT</Heading>
    </div>
    <Heading level={6}>Lorem Ipsum has been the industry's.</Heading>
    </div>
    <div className="assistant-bottom m-[10px]">
    <img className="w-[100%]" src="/image/mens.png" alt="" />
    </div>
</div>
</div>
<div className="assistant-right rounded-[10px]">
<img className="w-[100%] p-[20px]" src="/image/Frame1.png" alt="" />
<div className="tall relative">
<div className="tall-image pt-[10px] flex gap-[8px] justify-center">
<img src="/image/tall.png" alt="" />
  <img src="/image/tall.png" alt="" />
  <img src="/image/tall.png" alt="" />
  <img src="/image/tall.png" alt="" />
</div>
</div>
</div>
</div>

   </div>
    <div className="man">
      <img alt="machine" className="w-[100%]"  src="/image/center.png"/>
      <div className="man-p absolute top-[20%]">
      <img alt="machine"   src="/image/robo.png"/>
      </div>
    </div>
    <div className="travel-main flex flex-col gap-4">
      {/* travel-top */}
    <div className="travel  rounded-[20px]">
        <div className="heading py-[20px] justify-center flex items-center gap-[5px]">
           <div className="">
           <img 

                 src="/image/travel.png"
                 alt="hand"
            />
           </div>
            <Heading level={2}>BUSINESS LOGIN</Heading>
        </div>
        <div className="travel-bussnius-g pt-[20px] pb-[35px]">
    <div className="text-center ">
    <Heading level={3}>TRAVEL ASSISTANT</Heading>
    </div>
  <div className="bussnius-g-main ">
   
    {/* Text & Buttons */}
    <div className="buss-left pl-[15px] pr-[30px] pt-[10px] gap-2">
      <Paragraph>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Paragraph>
    </div>
  </div>
</div>

    </div>
    {/* travel-bottom */}

    <div className="travel-mbl grid grid-cols-[22%_78%] py-[25px] overflow-hidden pl-[10px] gap-[10px] ">
      <div className="travel-mbl-left flex flex-col gap-3">
        <div className="travel-mbl-cir-top rounded-[20px] p-[8px]">
          <Circual/>
          <Circual/>
        </div>
        <div className="travel-mbl-cir-top rounded-[20px] p-[8px]">
          <Circual/>
          <Circual/>
          <Circual/>
        </div>
      </div>
      <div className="travel-mbl-riht pr-6">
      <img className="h-[182px]" src="/image/phone.png" alt="" />
      <img className="mt-[20px]" src="/image/LLLLL.png" alt="" />
      </div>
    </div>
    
    </div>
    <div className="heading-right flex flex-col justify-center items-center">
    <Heading level={4}>Explore the world’s most stunning seasides</Heading>
    <div className="level px-[20px] pt-[40px]">
      <img src="/image/level.png" alt="" />
    </div>
    </div>
  </div>
 </div>
</div>
      
     <div className=" relative w-[90%] transform left-[8%] rotate-x-[90deg]  top-[-40px]">
     <Steps/>
     </div>
    </div>
 


 
  );
}

export default Banner;
