import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { userGrowth } from "../../constants/analyticsData";

const UserGrowthChart = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart
        data={userGrowth}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Area
          type="monotone"
          dataKey="candidates"
          name="Candidates"
          stroke="#2563EB"
          fill="#2563EB"
          fillOpacity={0.25}
        />

        <Area
          type="monotone"
          dataKey="recruiters"
          name="Recruiters"
          stroke="#10B981"
          fill="#10B981"
          fillOpacity={0.25}
        />

        <Area
          type="monotone"
          dataKey="admins"
          name="Admins"
          stroke="#F59E0B"
          fill="#F59E0B"
          fillOpacity={0.25}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;