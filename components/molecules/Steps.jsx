import React from "react";
import Button from "../atoms/Button";
import Signal from "../atoms/Signal";
import Heading from "../atoms/Heading";

function Steps() {
  return (
    <div className="steps relative w-full overflow-hidden">
      {/* Background Plate Image */}
      <img
        className="w-full object-cover z-0"
        src="/image/sah.png"
        alt="plate background"
      />

      {/* Content Over Image */}
      <div className="absolute top-[60%] left-0 w-[95%] m-auto h-full flex justify-center ">
        <div className="under grid grid-cols-[33%_37%_30%] w-[90%] max-w-[1440px] ">
          {/* Left Side (Black + White buttons) */}
          <div className="black-side pl-[15%] pt-[-90px]  flex  flex-col">
            <div className="black-btn flex items-center flex-col gap-1">
              <Button variant="black">How it Works</Button>
              <Button variant="black">Latest news</Button>
              <Button variant="black">City guide</Button>
            </div>
            <div className="white flex gap-2 flex-wrap">
              <Button variant="white">Business Login</Button>
              <Button variant="white">Travel Planner</Button>
            </div>
          </div>

          {/* Middle Side (Login & Other White Buttons) */}
          <div className="middle flex flex-col items-center gap-2">
            <Button variant="login">Login</Button>
            <div className="flex gap-2 flex-wrap justify-center">
              <Button variant="white">Special Offer</Button>
              <Button variant="white">New Registration</Button>
            </div>
          </div>

          {/* Right Side (Icons with Headings) */}
          <div className="right-s flex justify-center gap-6 items-start">
            <div className="flex flex-col items-center">
              <img
                src="/image/wi.png"
                className="w-[80%]"
                alt="let's go icon"
              />
              <Heading level={13}>let’s go</Heading>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/image/le.png"
                className="w-[80%]"
                alt="use tool icon"
              />
              <Heading level={13}>use Tool</Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  l;
}

export default Steps;
