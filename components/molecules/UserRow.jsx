const UserRow = ({ name, email, status, image }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-gray-800 font-medium">{name}</span>
          <span className="text-sm text-gray-500">{email}</span>
        </div>
      </div>

      <span
        className={`text-sm font-semibold px-2 py-1 rounded-full ${
          status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default UserRow;
