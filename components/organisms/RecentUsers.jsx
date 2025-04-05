import UserRow from "../molecules/UserRow";
const users = [
  {
    name: "Abbas Baig",
    email: "abbasbaig@gmail.com",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Johnson",
    email: "johnson@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Michael",
    email: "michael.chem@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sarah",
    email: "sarah.johnson@example.com",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=5",
  },
];


const RecentUsers = () => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="mb-4 font-medium text-gray-700">Recent Users</div>
    <div className="space-y-2">
      {users.map((user, idx) => (
        <UserRow key={idx} {...user} />
      ))}
    </div>
  </div>
);

export default RecentUsers;