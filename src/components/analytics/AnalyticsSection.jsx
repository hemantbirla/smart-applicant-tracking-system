import ApplicationsChart from "./ApplicationsChart";
import JobsChart from "./JobsChart";
import UserGrowthChart from "./UserGrowthChart";
import StatusDistributionChart from "./StatusDistributionChart";

const AnalyticsSection = () => {
  return (
    <section className="analytics-section">
      <div className="analytics-header">
        <h2>Dashboard Analytics</h2>
        <p>Monitor platform performance and recruitment insights.</p>
      </div>

      <div className="analytics-grid">
        <ApplicationsChart />

        <JobsChart />

        <UserGrowthChart />

        <StatusDistributionChart />
      </div>
    </section>
  );
};

export default AnalyticsSection;