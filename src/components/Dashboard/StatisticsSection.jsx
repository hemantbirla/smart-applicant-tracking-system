import { useMemo } from "react";

import DashboardCard from "./DashboardCard";

import { dashboardData } from "../../constants/dashboardData";

import "../../styles/dashboard.css";

const StatisticsSection = ({ data = dashboardData }) => {
  const statisticsCards = useMemo(() => {
    return data.map((item) => <DashboardCard key={item.id} {...item} />);
  }, [data]);

  return (
    <section className="statistics-section">
      <h2 className="section-title">Dashboard Statistics</h2>

      <div className="statistics-grid">{statisticsCards}</div>
    </section>
  );
};

export default StatisticsSection;
