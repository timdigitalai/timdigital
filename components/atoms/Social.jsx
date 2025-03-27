import Link from 'next/link';
import React from 'react';

function Social({ icon: Icon, href }) {
  return (
    <Link href={href} className="w-[40px] h-[40px] flex justify-center items-center rounded-full text-white bg-[#59BFEB]">
      {Icon && <Icon size={20} />} 
    </Link>
  );
}

export default Social;
