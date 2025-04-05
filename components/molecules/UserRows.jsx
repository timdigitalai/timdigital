"use client";
import Image from "next/image";
import { ToggleSwitch } from "../atoms/ToggleSwitch";
import { Badge } from "../atoms/Badge";
import { useState } from "react";
import { MdBlockFlipped } from "react-icons/md";

const UserRows = ({ user }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <tr className="border-b text-sm hover:bg-blue-50">
      <td className="p-3">
        <input type="checkbox" />
      </td>
      <td className="p-3">{user.id}</td>
      <td className="p-3 flex items-center gap-2">
        <Image
          src={user.avatar}
          alt="avatar"
          width={35}
          height={35}
          className="rounded-full"
        />
        {user.name}
      </td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">
        <Badge text={user.role} color={user.roleColor} />
      </td>
      <td className="p-3">
        <ToggleSwitch checked={isOn} onChange={() => setIsOn(!isOn)} />
      </td>
      <td className="p-3 flex gap-2 justify-end">
        <button className="text-gray-600 text-sm hover:text-black">✏️</button>
        <button className="text-red-600 flex items-center gap-[3px] border border-red-600 px-2 py-1 text-xs rounded hover:bg-red-100">
          <MdBlockFlipped />
          Ban
        </button>
      </td>
    </tr>
  );
};

export default UserRows;
