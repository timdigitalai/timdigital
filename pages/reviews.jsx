import Sidebar from "@/components/organisms/Sidebar";
import Topbar from "@/components/organisms/Topbar";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    status: "Approved",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 3.5,
    date: "2024-02-15",
    content:
      "This place is terrible! The service was awful and the food was cold. I would never recommend this to anyone!",
    flagReason: "Inappropriate content",
  },
  {
    status: "Approved",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 4,
    date: "2024-02-15",
    content: "Great service and friendly staff!",
    flagReason: "",
  },
  {
    status: "Approved",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 3.5,
    date: "2024-02-15",
    content:
      "This place is terrible! The service was awful and the food was cold. I would never recommend this to anyone!",
    flagReason: "Inappropriate content",
  },
  {
    status: "Pending",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 4,
    date: "2024-02-15",
    content: "Great service and friendly staff!",
    flagReason: "",
  },
  {
    status: "Approved",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 3.5,
    date: "2024-02-15",
    content:
      "This place is terrible! The service was awful and the food was cold. I would never recommend this to anyone!",
    flagReason: "Inappropriate content",
  },
  {
    status: "Pending",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 4,
    date: "2024-02-15",
    content: "Great service and friendly staff!",
    flagReason: "",
  },
  {
    status: "Approved",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 3.5,
    date: "2024-02-15",
    content:
      "This place is terrible! The service was awful and the food was cold. I would never recommend this to anyone!",
    flagReason: "Inappropriate content",
  },
  {
    status: "Pending",
    business: "San Francisco, CA",
    user: "John Smith",
    rating: 4,
    date: "2024-02-15",
    content: "Great service and friendly staff!",
    flagReason: "",
  },
  // More reviews...
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`text-yellow-400 ${
            rating >= star ? "" : rating >= star - 0.5 ? "text-yellow-300" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsManagementPage() {
  const [selectedReview, setSelectedReview] = useState(reviews[0]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 flex-1 flex gap-6">
          {/* Left Panel: Reviews List */}
          <div className="w-[75%]">
            <div className="mb-4 flex gap-4 items-center">
              <select className="border p-2 rounded text-sm">
                <option>All Reviews</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
              <select className="border p-2 rounded text-sm">
                <option>Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              <button className="bg-black text-white px-4 py-2 rounded text-sm">
                Apply Filters
              </button>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="p-2 border-b">Status</th>
                  <th className="p-2 border-b">Business</th>
                  <th className="p-2 border-b">User</th>
                  <th className="p-2 border-b">Rating</th>
                  <th className="p-2 border-b">Date</th>
                  <th className="p-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, i) => (
                  <tr
                    key={i}
                    className="hover:bg-blue-50 cursor-pointer"
                    onClick={() => setSelectedReview(review)}
                    style={{ height: '70px' }} // Increased row height
                  >
                    <td className="p-2 border-b">
                      <span className="bg-[#DCFCE7] text-[#166534] text-xs px-4 py-[8px] rounded-[20px]">
                        {review.status}
                      </span>
                    </td>
                    <td className="p-2 border-b">{review.business}</td>
                    <td className="p-2 border-b">{review.user}</td>
                    <td className="p-2 border-b">
                      <StarRating rating={review.rating} />
                    </td>
                    <td className="p-2 border-b">{review.date}</td>
                    <td className="p-2 border-b">
                      <button className="text-black">👁️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Panel: Review Details */}
          <div className="w-[25%] p-4 border-l">
            <h2 className="text-xl font-bold mb-2">Review Details</h2>
            <div className="mb-2 text-sm">
              <strong>Business:</strong> {selectedReview.business}
            </div>
            <div className="mb-2 text-sm">
              <strong>User:</strong> {selectedReview.user}
            </div>
            <div className="mb-2 text-sm">
              <strong>Rating:</strong>
              <StarRating rating={selectedReview.rating} />
            </div>
            <div className="mb-2 text-sm">
              <strong>Review Content:</strong>
              <p className="text-gray-600 mt-1">{selectedReview.content}</p>
            </div>
            <div className="mb-4 text-sm">
              <strong>Flag Reason:</strong> {selectedReview.flagReason || "N/A"}
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
                Delete Review
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded text-sm">
                Ban User
              </button>
              <button className="border border-gray-400 text-sm px-4 py-2 rounded">
                Dismiss Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
