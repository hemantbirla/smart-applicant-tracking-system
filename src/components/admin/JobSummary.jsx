import { jobSummary } from "../../constants/adminDashboardData";

const JobSummary = () => {
  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Job Summary</h2>

      <div className="summary-grid">
        {jobSummary.map((item) => (
          <div key={item.id} className="summary-card">
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSummary;