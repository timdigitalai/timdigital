import BusinessRow from "../molecules/BusinessRow";

const businesses = [
  {
    name: "Cafe Deluxe",
    location: "San Francisco, CA",
    category: "Restaurant",
    rating: 4.5,
    reviews: 28290,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "FitZone Gym",
    location: "Los Angeles, CA",
    category: "Fitness",
    rating: 4.5,
    reviews: 13456,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Serenity Spa",
    location: "New York, NY",
    category: "Wellness",
    rating: 4.5,
    reviews: 12227,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Electronics",
    location: "San Francisco, CA",
    category: "Smartphones",
    rating: 4.5,
    reviews: 12101,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=9",
  },
];

const PopularBusinesses = () => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="mb-4 font-medium text-gray-700">Popular Businesses</div>
    <table className="w-full text-left">
      <thead>
        <tr className="text-xs text-gray-500 bg-[#EDF8FD] h-[40px] uppercase border-b">
          <th className="pl-2">Business</th>
          <th>Category</th>
          <th>Rating</th>
          <th>Reviews</th>
          <th className="text-right pr-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {businesses.map((biz, idx) => (
          <BusinessRow key={idx} {...biz} />
        ))}
      </tbody>
    </table>
  </div>
);

export default PopularBusinesses;
