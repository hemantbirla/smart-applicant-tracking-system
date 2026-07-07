import JobCard from "./JobCard";

import { recentJobs } from "../../../constants/recruiterDashboardData";

const RecentJobs = () => {
  return (
    <section className="dashboard-section">
      <h2 className="dashboard-section-title">
        Recent Job Postings
      </h2>

      <div className="jobs-list">
        {recentJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentJobs;