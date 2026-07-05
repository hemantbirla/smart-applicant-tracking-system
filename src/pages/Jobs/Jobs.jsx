import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import SearchBar from "../../components/jobs/SearchBar";
import FilterPanel from "../../components/jobs/FilterPanel";
import SortDropdown from "../../components/jobs/SortDropdown";
import ActiveFilters from "../../components/jobs/ActiveFilters";
import JobList from "../../components/jobs/JobList";

import useJobFilters from "../../hooks/useJobFilters";

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

  const {
    filteredJobs,
    searchTerm,
    filters,
    sortBy,
    setSearchTerm,
    updateFilter,
    setSortBy,
    clearFilters,
  } = useJobFilters(jobs);

  return (
    <DashboardLayout>
      <div className="jobs-page">
        <h1 className="jobs-heading">
          Find Your Dream Job
        </h1>

        <p className="jobs-subtitle">
          Browse the latest opportunities from top companies.
        </p>

        {!loading && !error && (
          <>
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
            />

            <FilterPanel
              filters={filters}
              onChange={updateFilter}
            />

            <SortDropdown
              value={sortBy}
              onChange={setSortBy}
            />

            <ActiveFilters
              searchTerm={searchTerm}
              filters={filters}
              clearFilters={clearFilters}
            />
          </>
        )}

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
          filteredJobs.length === 0 && (
            <div className="jobs-empty">
              No matching jobs found.
            </div>
          )}

        {!loading &&
          !error &&
          filteredJobs.length > 0 && (
            <JobList jobs={filteredJobs} />
          )}
      </div>
    </DashboardLayout>
  );
};

export default Jobs;