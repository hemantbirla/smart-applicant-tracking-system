import { useEffect, useState, useCallback } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import SearchBar from "../../components/jobs/SearchBar";
import FilterPanel from "../../components/jobs/FilterPanel";
import SortDropdown from "../../components/jobs/SortDropdown";
import ActiveFilters from "../../components/jobs/ActiveFilters";
import JobList from "../../components/jobs/JobList";

import useJobFilters from "../../hooks/useJobFilters";
import usePagination from "../../hooks/usePagination";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

import { getJobs } from "../../services/jobService";

import "../../styles/jobs.css";
import SkeletonTable from "../../components/common/Skeleton/SkeletonTable";

const PAGE_SIZE = 10;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API Ready
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getJobs({
        page,
        limit: PAGE_SIZE,
      });

      setJobs(response.jobs);

      setHasMore(response.jobs.length === PAGE_SIZE);
    } catch (err) {
      console.error(err);
      setError("Unable to load jobs.");
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

  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination(filteredJobs);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setPage((prev) => prev + 1);

    // Future API
    // fetchJobs(page + 1);
  }, [loading, hasMore]);

  const { lastElementRef } = useInfiniteScroll(
    loading,
    hasMore,
    loadMore
  );

  if (loading) {
    return <SkeletonTable />;
  }

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

            <JobList
              jobs={currentItems}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
              loading={loading}
              lastElementRef={lastElementRef}
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
      </div>
    </DashboardLayout>
  );
};

export default Jobs;