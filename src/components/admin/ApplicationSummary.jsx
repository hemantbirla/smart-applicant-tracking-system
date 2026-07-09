import { applicationSummary } from "../../constants/adminDashboardData";

const ApplicationSummary = () => {
  return (
    <div className="admin-summary-card">
      <h2 className="admin-section-title">
        Application Summary
      </h2>

      <div className="summary-list">
        {applicationSummary.map((item) => (
          <div
            key={item.id}
            className="summary-item"
          >
            <span>{item.title}</span>

            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationSummary;