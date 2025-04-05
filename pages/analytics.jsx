import StatCard from "@/components/molecules/StatCard";
import Sidebar from "@/components/organisms/Sidebar";
import { FaUsers, FaBuilding, FaStar, FaDollarSign } from "react-icons/fa";
import Topbar from "@/components/organisms/Topbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const lineChartData = [
  { name: "Sun", views: 80, interactions: 100, reviews: 60 },
  { name: "Mon", views: 120, interactions: 130, reviews: 90 },
  { name: "Tue", views: 150, interactions: 170, reviews: 110 },
  { name: "Wed", views: 100, interactions: 160, reviews: 130 },
  { name: "Thu", views: 200, interactions: 140, reviews: 180 },
  { name: "Fri", views: 170, interactions: 190, reviews: 220 },
  { name: "Sat", views: 130, interactions: 200, reviews: 210 },
];

const topCategoriesData = [
  { name: "Entertainments", value: 500 },
  { name: "Restaurant", value: 680 },
  { name: "Shopping", value: 620 },
  { name: "Services", value: 400 },
  { name: "Hotels", value: 600 },
];

const trendingBusinesses = [
  { name: "Central Cafe", views: "15,234", growth: "+28.8%" },
  { name: "Urban Fitness", views: "15,234", growth: "+34.8%" },
  { name: "Central Cafe", views: "15,234", growth: "+25.8%" },
  { name: "Restaurant", views: "15,234", growth: "+27.8%" },
  { name: "Urban Fitness", views: "15,234", growth: "+22.8%" },
];

export default function AnalyticsDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 shadow-md mx-6 pt-[40px] pb-[20px] gap-4 mb-6">
        <StatCard icon={<FaUsers className="text-primary" />} title="Total Users" value="12,345" change="+12%" />
        <StatCard icon={<FaBuilding className="text-primary" />} title="Active Businesses" value="2,345" change="+10%" />
        <StatCard icon={<FaStar className="text-primary" />} title="New Reviews" value="5,345" change="+22%" />
      </div>
        <main className="px-6 py-[10px] flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Line Chart */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="mb-4 font-medium text-gray-700">Popular Places Trend</h2>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#3B82F6" name="Views" />
                  <Line type="monotone" dataKey="interactions" stroke="#FBBF24" name="Interactions" />
                  <Line type="monotone" dataKey="reviews" stroke="#10B981" name="Reviews" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="mb-4 font-medium text-gray-700">Top Categories</h2>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart layout="vertical" data={topCategoriesData}>
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#38BDF8" barSize={20} radius={[0, 10, 10, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-4 rounded-xl shadow flex items-center justify-center h-[250px]">
              <span className="text-gray-500 text-sm">Interactive map visualization</span>
            </div>

            {/* Trending Businesses Table */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="mb-4 font-medium text-gray-700">Trending Businesses</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-2">Business</th>
                    <th className="pb-2">Views</th>
                    <th className="pb-2">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {trendingBusinesses.map((biz, i) => (
                    <tr key={i} className="border-b last:border-none">
                      <td className="py-2">{biz.name}</td>
                      <td>{biz.views}</td>
                      <td className="text-green-500 font-medium">{biz.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
