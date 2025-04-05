import Image from "next/image";

const BusinessRows = ({ business }) => {
  return (
    <tr className="border-b text-sm text-gray-700">
      {/* Name */}
      <td className="py-3 pl-2">
        <span>{business.name}</span>
      </td>

      {/* Category */}
      <td className="py-3">{business.category}</td>

      {/* Location */}
      <td className="py-3">{business.location}</td>

      {/* Status */}
      <td className="py-3">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            business.statusColor === "green"
              ? "bg-green-100 text-green-700"
              : business.statusColor === "yellow"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {business.status}
        </span>
      </td>

      {/* Actions */}
      <td className="py-3">
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800">Edit</button>
          <button className="text-red-600 hover:text-red-800">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default BusinessRows;
