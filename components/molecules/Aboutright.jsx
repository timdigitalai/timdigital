import React from 'react';
import Image from 'next/image';

function Aboutright() {
  return (
    <div className="relative w-full flex pb-[50px] justify-center items-center">
      {/* Shadow Image (smaller, background, behind main image) */}
      <div className="absolute  left-[40%] opacity-30 z-0 w-[400px] hidden lg:block">
        <Image
          src="/image/aboutm.png"
          alt="Background Shadow"
          width={300}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Image */}
      <div className="relative z-10 max-w-[400px] w-full">
        <Image
          src="/image/aboutm.png"
          alt="Main"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Aboutright;
