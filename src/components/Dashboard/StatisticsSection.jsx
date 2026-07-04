import DashboardCard from "./DashboardCard";
import { dashboardData } from "../../constants/dashboardData";

import "../../styles/dashboard.css";

const StatisticsSection = ({ data = dashboardData }) => {
  return (
    <section className="statistics-section">
      <h2 className="section-title">
        Dashboard Statistics
      </h2>

      <div className="statistics-grid">
        {data.map((item) => (
          <DashboardCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;