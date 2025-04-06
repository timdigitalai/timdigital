import Sidebar from "@/components/organisms/Sidebar";
import  UsersTable  from "../components/organisms/UsersTable";
import { RiResetRightFill } from "react-icons/ri";
import Topbar from "@/components/organisms/Topbar";

const dummyUsers = Array(10).fill({
  id: "#USR003",
  name: "Clothing",
  email: "Johnson@example.com",
  role: "Tourist",
  roleColor: "blue",
  avatar: "https://i.pravatar.cc/150?img=32",
  active: true,
});

export default function UsersPage() {
  return (
  <div className="main flex">
    <Sidebar/>
      <div className=" w-[100%]">
        <Topbar text={"User Management"} p={"Manage And Monitor User Accounts Across The Platform"}/>
      {/* Filters/Search */}
      <div className="flex justify-between flex-wrap gap-4 mb-4 items-center">
        <input
          type="text"
          placeholder="Search User"
          className="  w-[39%] p-2 border border-gray-300 rounded"
        />
      <div className="flex gap-[20px]">
      <select className="p-2 border border-gray-300 rounded">
          <option>All Views</option>
          <option>Business Owner</option>
          <option>Tourist</option>
          <option>All Roles</option>
          <option>Admin</option>
        </select>
        <select className="p-2 border border-gray-300 rounded">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button className="bg-gray-200 flex items-center gap-[2px] text-sm px-4 py-2 rounded"><RiResetRightFill />
        Reset</button>
      </div>
      </div>

      <UsersTable users={dummyUsers} />

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <select className="p-2 border border-gray-300 rounded">
          <option>All Status</option>
        </select>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-black text-white rounded">1</button>
          <button className="px-3 py-1 bg-white border rounded">2</button>
          <button className="px-3 py-1 bg-white border rounded">3</button>
          <button className="px-3 py-1 bg-white border rounded">4</button>
        </div>
      </div>

      {/* Bulk Actions */}
      <div className="mt-4 bg-[#3799DC] p-4 rounded flex justify-between items-center">
       <div className="flex gap-[20px]">
       <span className="text-sm text-[white]">3 users selected</span>
       <button className="text-sm text-[white] text-gray-600 underline">Clear selection</button>
       </div>
        <div className="flex gap-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Ban Selected</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">Unban Selected</button>
        </div>
      </div>
    </div>
  </div>
  );
}