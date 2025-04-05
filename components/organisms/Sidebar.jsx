import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Users Management", href: "/users", icon: <FaUsers /> },
    { name: "Business Listings", href: "/business", icon: <FaBuilding /> },
    { name: "Reviews Management", href: "/reviews", icon: <FaStar /> },
    { name: "Analytics & Insights", href: "/analytics", icon: <FaChartLine /> },
  ];

  return (
    <div className="border-r-2 border-[#4EB9E94D]">
      <div className="flex justify-center h-[75px] bg-white items-center">
        <Image 
          src="/image/logo.png" 
          alt="Logo"
          width={100}
          height={80}
          className="rounded-full" 
        />
      </div>

      <aside className="w-60  bg-[#f1f9ff] px-[10px] py-[20px] space-y-6 min-h-screen">
        <nav className="space-y-3 text-gray-700">
          {links.map((link, idx) => {
            const isActive = router.pathname === link.href;

            return (
              <Link
                key={idx}
                href={link.href}
                className={`flex items-center gap-2 p-2 rounded transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#4FBBEA] to-[#3697DB] text-white font-semibold"
                    : "hover:bg-blue-100"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
