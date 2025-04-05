import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sun", uv: 120 },
  { name: "Mon", uv: 150 },
  { name: "Tue", uv: 110 },
  { name: "Wed", uv: 140 },
  { name: "Thu", uv: 70 },
  { name: "Fri", uv: 180 },
  { name: "Sat", uv: 115 },
];

const ActivityChart = () => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="mb-4 font-medium text-gray-700">Activity Overview</div>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#60A5FA" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;