import React from "react";

function Signal({ img }) {
  return (
    <div className="w-[73px] cursor-pointer signal h-[73px] rounded-full flex items-center justify-center ">
      <div className="w-[50px] object-contain border-[5px] border-transparent border-gradient p-[5px] h-[50px] flex items-center justify-center">
      <img
  className="w-full h-full"
  src={img}
  alt=""
/>

      </div>
    </div>
  );
}

export default Signal;
