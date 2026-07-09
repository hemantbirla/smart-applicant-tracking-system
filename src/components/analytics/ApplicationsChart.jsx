import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { monthlyApplications } from "../../constants/analyticsData";

const ApplicationsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={monthlyApplications}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="month"
          tick={{ fontSize: 13 }}
        />

        <YAxis tick={{ fontSize: 13 }} />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="applications"
          stroke="#2563EB"
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ApplicationsChart;