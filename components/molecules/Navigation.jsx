"use client"; // Next.js 13+ ke liye zaroori hai agar hooks use kar rahe hain

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Active route check karne ke liye

const Navigation = () => {
  const pathname = usePathname(); // Current route ka path milega

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Media", href: "/services" },
    { name: "Advertise", href: "/ali" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="p-4">
      <ul className="flex gap-[30px] ">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-[#848484] px-3 py-2 rounded-md text-lg font-medium transition duration-300
                ${
                  pathname === item.href
                    ? "bg-white shadow-[2px_2px_12.8px_0px_#0000005E] text-[#848484] font-bold"
                    : "hover:bg-white hover:shadow-[2px_2px_12.8px_0px_#0000005E]"
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
