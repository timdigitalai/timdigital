"use client";
import React from "react";

export const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="relative w-12 h-6 bg-black rounded-full transition-colors duration-300">
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${
            checked ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};
