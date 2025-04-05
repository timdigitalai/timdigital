import UserRows from "../molecules/UserRows";

const UsersTable = ({ users }) => (
  <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
    <table className="min-w-full text-left">
      <thead className="bg-[#F2F2F2] text-gray-600 text-sm">
        <tr>
          <th className="p-3"><input type="checkbox" /></th>
          <th className="p-3">User ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Role</th>
          <th className="p-3">Status</th>
          {/* Move Actions column to the last */}
          <th className="p-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <UserRows key={idx} user={user} />
        ))}
      </tbody>
    </table>
  </div>
);

export default UsersTable;
