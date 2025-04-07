import React from 'react'
import Button from '../atoms/Button'
import Signal from '../atoms/Signal'
import Heading from '../atoms/Heading'

function Steps() {
  return (
    <div className="steps relative w-full overflow-hidden">
      {/* Background Plate Image */}
      <img className="absolute top-0 left-0 z-0" src="/image/plate.png" alt="" />

      {/* Lock layout to 1024px width */}
      <div className=" mx-auto relative z-10">
        {/* Top Icons Row */}
        <div className="flex">
          <img className="relative top-[15px] left-[16px]" src="/image/t5.png" alt="" />
          <img className="relative right-[142px] top-[14px]" src="/image/t4.png" alt="" />
          <img className="relative right-[178px] top-[12px]" src="/image/t3.png" alt="" />
          <img className="relative right-[177px] top-[13px]" src="/image/t2.png" alt="" />
          <img className="relative right-[249px] top-[13px]" src="/image/t-1.png" alt="" />
        </div>

        {/* Bottom Section */}
        <div className="step-bootom relative flex">
          {/* Black Section */}
          <div className="black relative top-[14px] left-[6%] ">
            <img src="/image/b1.png" alt="" />

            {/* Black Buttons */}
            <div className="black-btn relative gap-2 bottom-[54%] left-[30%] flex flex-col">
              <Button variant="black">How it works</Button>
              <Button variant="black">Latest news</Button>
              <Button variant="black">City guide</Button>
            </div>

            {/* White Buttons */}
            <div className="travel-planer-btn bottom-[58%] left-[12%] flex flex-row gap-2 relative">
              <Button variant={"white"}>Business Login</Button>
              <Button variant={"white"}>Travel Planer</Button>
            </div>
          </div>

          {/* Login Section */}
          <div className=" top-[12px] left-[4.8%] relative">
            <img src="/image/b2.png" alt="" />
            <div className="login-b relative bottom-[42%] flex flex-col gap-[10px] justify-center items-center">
              <Button variant="login">Login</Button>
              <div className="rejister gap-[10px] flex flex-row">
                <Button variant="white">Special Offer</Button>
                <Button variant="white">New Registration</Button>
              </div>
            </div>
          </div>

          {/* Wifi Section */}
          <div className="wifi-session relative left-[3.7%]  top-[10px]">
            <img src="/image/b3.png" alt="" />
            <div className="wfi-btn flex gap-[20px] relative bottom-[42%] left-[20%]">
              <div className="text-center">
                <Signal img="/image/let.png" />
                <Heading level="5">let’s go</Heading>
              </div>
              <div className="text-center">
                <Signal img="/image/wifi.png" />
                <Heading level="5">use Tool</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
