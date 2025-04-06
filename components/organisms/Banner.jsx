import React from "react";
import Image from "next/image";
import Heading from "../atoms/Heading";
import '../../app/globals.css';
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Header from "./Header";
import Circual from "../atoms/Circual";
import Steps from "../molecules/Steps";

function Banner() {
  return (
    <div className="main-banner absolute w-full overflow-x-hidden">
      <div className="machine-bort relative z-10">
        <div className="grid grid-cols-[15%_83%] gap-[6px] mx-auto max-w-[100%]">
          {/* Left Plane Image */}
          <div className="py-[50px]">
            <img src="/image/airoplan.png" className="w-full" alt="airoplan" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-[30%_30%_24%_20%] gap-[6px]">
            {/* Business Login Section */}
            <div className="bussnius-side">
              <div className="bussnius rounded-[20px]">
                <div className="heading flex items-center justify-center gap-[5px]">
                  <img width={38} height={38} src="/image/hnd.png" alt="hand" />
                  <Heading level={2}>BUSINESS LOGIN</Heading>
                </div>
                <div className="bussnius-g">
                  <div className="text-center">
                    <Heading level={3}>TRAVEL ASSISTANT</Heading>
                  </div>
                  <div className="bussnius-g-main flex items-center gap-2">
                    <div className="g-im h-[165px] flex-shrink-0">
                      <img className="h-[165px]" alt="girl" src="/image/left-g.png" />
                    </div>
                    <div className="buss-left pl-[8px] flex flex-col gap-2">
                      <Paragraph>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </Paragraph>
                      <div className="btn flex gap-2">
                        <Button variant="signup">LOGIN</Button>
                        <Button variant="signup">LOGIN</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Bottom */}
              <div className="main mt-[10px] gap-[10px] grid grid-cols-2">
                <div className="ASSISTANT">
                  <div className="assistant-left">
                    <div className="assistant- h-[80px] flex flex-col text-center">
                      <div className="pt-[20px]">
                        <Heading level={5}>TRAVEL ASSISTANT</Heading>
                      </div>
                      <Heading level={6}>Lorem Ipsum has been the industry's.</Heading>
                    </div>
                    <div className="assistant-bottom m-[10px]">
                      <img className="w-full" src="/image/mens.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="assistant-right rounded-[10px]">
                  <img className="w-full p-[20px]" src="/image/Frame1.png" alt="" />
                  <div className="tall relative">
                    <div className="tall-image pt-[10px] flex gap-[8px] justify-center">
                      {[...Array(4)].map((_, i) => (
                        <img key={i} src="/image/tall.png" alt="tall" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image Section */}
            <div className="man">
              <img alt="machine" className="w-full" src="/image/center.png" />
              <div className="man-p absolute top-[20%]">
                <img alt="robo" src="/image/robo.png" />
              </div>
            </div>

            {/* Travel Section */}
            <div className="travel-main flex flex-col gap-4">
              <div className="travel rounded-[20px]">
                <div className="heading py-[20px] justify-center flex items-center gap-[5px]">
                  <img src="/image/travel.png" alt="travel" />
                  <Heading level={2}>BUSINESS LOGIN</Heading>
                </div>
                <div className="travel-bussnius-g pt-[20px] pb-[35px]">
                  <div className="text-center">
                    <Heading level={3}>TRAVEL ASSISTANT</Heading>
                  </div>
                  <div className="bussnius-g-main">
                    <div className="buss-left pl-[15px] pr-[30px] pt-[10px] gap-2">
                      <Paragraph>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Travel Bottom */}
              <div className="travel-mbl grid grid-cols-[22%_78%] py-[25px] overflow-hidden pl-[10px] gap-[10px]">
                <div className="travel-mbl-left flex flex-col gap-3">
                  <div className="travel-mbl-cir-top rounded-[20px] p-[8px]">
                    <Circual />
                    <Circual />
                  </div>
                  <div className="travel-mbl-cir-top rounded-[20px] p-[8px]">
                    <Circual />
                    <Circual />
                    <Circual />
                  </div>
                </div>
                <div className="travel-mbl-riht pr-6">
                  <img className="h-[182px]" src="/image/phone.png" alt="" />
                  <img className="mt-[20px]" src="/image/LLLLL.png" alt="" />
                </div>
              </div>
            </div>

            {/* Final Text + Graphic Section */}
            <div className="heading-right flex flex-col justify-center items-center">
              <Heading level={4}>Explore the world’s most stunning seasides</Heading>
              <div className="level px-[20px] pt-[40px]">
                <img src="/image/level.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Component - shifted down slightly */}
      <div className="relative w-[90%] left-[5%] top-[-20px] z-0">
        <Steps />
      </div>
    </div>
  );
}

export default Banner;
