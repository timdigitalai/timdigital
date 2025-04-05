import Image from "next/image";

const BusinessRow = ({ business, image, name, category, rating, reviews, status }) => {
  // If business prop is provided, use its values
  const businessData = business || {
    image,
    name,
    category,
    rating,
    reviews,
    status
  };

  return (
    <tr className="border-b text-sm text-gray-700">
      {/* Image + Name */}
      <td className="flex items-center gap-3 py-3 pl-2">
        <Image
          src={businessData.image}
          alt={businessData.name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>{businessData.name}</span>
      </td>

      {/* Category */}
      <td className="py-3">{businessData.category}</td>

      {/* Rating */}
      <td className="py-3">{businessData.rating}</td>

      {/* Reviews */}
      <td className="py-3">{businessData.reviews?.toLocaleString() || '0'}</td>

      {/* Status */}
      <td className="py-3 text-right pr-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            businessData.status === "Approved" || businessData.status === "Active"
              ? "bg-green-100 text-green-700"
              : businessData.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {businessData.status}
        </span>
      </td>
    </tr>
  );
};

export default BusinessRow;
