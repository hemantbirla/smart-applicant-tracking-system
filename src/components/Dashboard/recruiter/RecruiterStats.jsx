import DashboardCard from "../DashboardCard";
import { recruiterStats } from "../../../constants/recruiterDashboardData";

const RecruiterStats = () => {
  return (
    <section className="statistics-section">
      <div className="statistics-grid">
        {recruiterStats.map((item) => (
          <DashboardCard
            key={item.id}
            title={item.title}
            count={item.count}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

export default RecruiterStats;