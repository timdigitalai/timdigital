import React from 'react';
import Image from 'next/image';

function Aboutright() {
  return (
    <div className="grid grid-cols-2 items-center relative">
      <div className=' relative'>
        <Image src="/image/aboutm.png" alt="Description" width={630} height={500} />
      </div>
      <div className=" opacity-[30%] absolute left-[30%]"> {/* Negative margin se neeche shift */}
        <Image src="/image/aboutm.png" alt="Description" width={300} height={500} />
      </div>
    </div>
  );
}

export default Aboutright;
