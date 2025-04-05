import Sidebar from "@/components/organisms/Sidebar";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const businesses = [
  {
    name: "Cafe Deluxe",
    location: "San Francisco, CA",
    category: "Restaurant",
    status: "Approved",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "FitZone Gym",
    location: "Los Angeles, CA",
    category: "Fitness",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Serenity Spa",
    location: "New York, NY",
    category: "Wellness",
    status: "Approved",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Electronics",
    location: "San Francisco, CA",
    category: "Smartphones",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Cafe Deluxe",
    location: "San Francisco, CA",
    category: "Restaurant",
    status: "Approved",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "FitZone Gym",
    location: "Los Angeles, CA",
    category: "Fitness",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Serenity Spa",
    location: "New York, NY",
    category: "Wellness",
    status: "Approved",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Electronics",
    location: "San Francisco, CA",
    category: "Smartphones",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=9",
  },
];

export default function BusinessListPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBusinesses = businesses.filter(
    (b) =>
      (selectedCategory === "All Categories" || b.category === selectedCategory) &&
      (selectedLocation === "All Locations" || b.location === selectedLocation) &&
      b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Business Listings Management</h1>
        </div>
        <p className="mb-4 text-sm text-gray-500">Total Pending Businesses: 40</p>

        <div className="flex justify-between gap-4 mb-6">
        <div className="w-[30%]">
        <input
            type="text"
            placeholder="Search User"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded w-[100%]"
          />
        </div>
       <div className="flex gap-[17px]">
       <select
            className="border px-4 py-[2px] rounded"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option>All Categories</option>
            <option>Fitness</option>
            <option>Wellness</option>
            <option>Smartphones</option>
            <option>Restaurant</option>
          </select>
          <select
            className="border px-4 py-[2px]  rounded"
            onChange={(e) => setSelectedLocation(e.target.value)}
            value={selectedLocation}
          >
            <option>All Locations</option>
            <option>San Francisco, CA</option>
            <option>Los Angeles, CA</option>
            <option>New York, NY</option>
            <option>Pakistan</option>
            <option>India</option>
          </select>
          <button
  className="text-black border flex gap-[3px] items-center border-[#84EDF1] px-2 py-2 rounded"
  onClick={() => {
    setSelectedCategory("All Categories");
    setSelectedLocation("All Locations");
    setSearchQuery("");
  }}
>
<RxCross2 />

  Reset Filters
</button>

          <button className="bg-black text-white px-4 py-2 rounded">+ Add New Business</button>
       </div>
        </div>

        <div className="border rounded overflow-hidden">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-2">Business</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBusinesses.map((business, index) => (
                <tr key={index} className="border-b ">
                  <td className="flex items-center gap-3 px-4 py-3">
                    <img src={business.image} alt={business.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">{business.name}</p>
                      <p className="text-xs text-gray-500">{business.location}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">{business.category}</td>
                  <td className="px-4 py-3">{business.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-4 py-2 text-xs font-medium rounded-[20px] text-[#166534] ${
                        business.status === "Approved"
                          ? "bg-[#DCFCE7]"
                          : business.status === "Pending"
                          ? "bg-[#FEF9C3]"
                          : "bg-[#DCFCE7]"
                      }`}
                    >
                      {business.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="bg-[#22C55E] text-white px-3 py-2 rounded text-xs mr-2">Approve</button>
                    <button className="bg-red-600 text-white px-3 py-2 rounded text-xs">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <select className="border p-2 rounded text-sm">
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
          <div className="flex gap-1 items-center">
            <button className="border px-2 py-1 rounded">&lt;</button>
            <button className="border px-3 py-1 rounded bg-black text-white">1</button>
            <button className="border px-3 py-1 rounded">2</button>
            <button className="border px-3 py-1 rounded">3</button>
            <button className="border px-2 py-1 rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}