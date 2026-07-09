import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { jobsByCategory } from "../../constants/analyticsData";

const JobsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={jobsByCategory}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="category" />

        <YAxis allowDecimals={false} />

        <Tooltip />

        <Bar
          dataKey="jobs"
          fill="#2563EB"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default JobsChart;