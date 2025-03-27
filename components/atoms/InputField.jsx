import React from "react";
import Heading from "@/components/atoms/Heading";

const InputField = ({ label, icon, type = "text", placeholder }) => {
  return (
    <div className="">
      <label className="block font-semibold mb-1 flex items-center gap-1">
        <span className="text-[#4FBBEA] w-[20px] h-[23px]">{icon}</span>
        <Heading level={13}>{label}</Heading>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default InputField;
