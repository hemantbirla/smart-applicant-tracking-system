import DashboardCard from "../DashboardCard";

import { recruiterStats } from "../../../constants/recruiterDashboardData";

const RecruiterStats = () => {
  return (
    <section className="statistics-section">
      <h2 className="dashboard-section-title">Dashboard Statistics</h2>

      <div className="dashboard-grid">
        {recruiterStats.map((item) => (
          <DashboardCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default RecruiterStats;
