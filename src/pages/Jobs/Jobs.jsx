import DashboardLayout from "../../layouts/DashboardLayout";
import JobList from "../../components/jobs/JobList";

import jobData from "../../constants/jobData";

import "../../styles/jobs.css";

const Jobs = () => {
  return (
    <DashboardLayout>
      <div className="jobs-page">
        <div className="jobs-header">
          <h1>Available Jobs</h1>

          <p>
            Explore the latest opportunities matching your
            skills.
          </p>
        </div>

        <JobList jobs={jobData} />
      </div>
    </DashboardLayout>
  );
};

export default Jobs;