import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <FaBell className="text-gray-600 text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg px-3 py-2">
            <FaUserCircle className="text-gray-600 text-2xl" />
            <span className="text-sm text-gray-700">Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;