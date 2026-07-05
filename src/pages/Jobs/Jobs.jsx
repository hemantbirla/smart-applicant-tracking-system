import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import JobList from "../../components/jobs/JobList";

import { getJobs } from "../../services/jobService";

import "../../styles/jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      setError("");

      const response = await getJobs();

      setJobs(response);
    } catch (err) {
      setError("Unable to load jobs.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="jobs-page">
        <h1 className="jobs-heading">
          Find Your Dream Job
        </h1>

        <p className="jobs-subtitle">
          Browse the latest opportunities from top companies.
        </p>

        {loading && (
          <div className="jobs-loading">
            Loading jobs...
          </div>
        )}

        {!loading && error && (
          <div className="jobs-error">
            {error}
          </div>
        )}

        {!loading &&
          !error &&
          jobs.length === 0 && (
            <div className="jobs-empty">
              No jobs available.
            </div>
          )}

        {!loading &&
          !error &&
          jobs.length > 0 && (
            <JobList jobs={jobs} />
          )}
      </div>
    </DashboardLayout>
  );
};

export default Jobs;