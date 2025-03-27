"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Media", href: "/media" },
    { name: "Advertise", href: "/advertise" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className="p-4"
      style={{
        background:
          "linear-gradient(352.96deg, rgba(79, 187, 234, 0.5) 6.97%, rgba(200, 237, 240, 0.5) 50.03%, rgba(79, 187, 234, 0.5) 102.26%)",
        borderRadius: "40px",
      }}
    >
      <ul className="flex gap-[30px]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-full text-lg font-medium transition duration-300 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-[#4FBBEA] via-[#72d3f3] to-[#4FBBEA] shadow-md"
                    : "text-[#848484] hover:text-[#4FBBEA]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
