import { FaUsers, FaBuilding, FaStar, FaDollarSign } from "react-icons/fa";
import StatCard from "../../components/molecules/StatCard";
import ActivityChart from "../../components/organisms/ActivityChart";
import RecentUsers from "../../components/organisms/RecentUsers";
import PopularBusinesses from "../../components/organisms/PopularBusinesses";

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<FaUsers className="text-primary" />} title="Total Users" value="12,345" change="+12%" />
        <StatCard icon={<FaBuilding className="text-primary" />} title="Active Businesses" value="2,345" change="+10%" />
        <StatCard icon={<FaStar className="text-primary" />} title="New Reviews" value="5,345" change="+22%" />
        <StatCard icon={<FaDollarSign className="text-primary" />} title="Revenue" value="$62,345" change="+15%" />
      </div>

      {/* Chart and Recent Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <ActivityChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <RecentUsers />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <PopularBusinesses />
      </div>
    </div>
  );
};

export default DashboardPage;
