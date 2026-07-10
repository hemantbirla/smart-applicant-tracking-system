import { useEffect, useState, useCallback, useMemo } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import SearchBar from "../../components/jobs/SearchBar";
import FilterPanel from "../../components/jobs/FilterPanel";
import SortDropdown from "../../components/jobs/SortDropdown";
import ActiveFilters from "../../components/jobs/ActiveFilters";
import JobList from "../../components/jobs/JobList";

import SkeletonTable from "../../components/common/Skeleton/SkeletonTable";
import ErrorFallback from "../../components/common/Error/ErrorFallback";

import useJobFilters from "../../hooks/useJobFilters";
import usePagination from "../../hooks/usePagination";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

import { getJobs } from "../../services/jobService";

import "../../styles/jobs.css";

const PAGE_SIZE = 10;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  /**
   * Fetch Jobs
   */
  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getJobs({
        page,
        limit: PAGE_SIZE,
      });

      const fetchedJobs = response.jobs || [];

      setJobs(fetchedJobs);

      setHasMore(fetchedJobs.length === PAGE_SIZE);
    } catch (err) {
      console.error(err);
      setError("Unable to load jobs.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  /**
   * Filter, Search & Sort
   */
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

  /**
   * Memoize filtered jobs
   */
  const memoizedJobs = useMemo(() => {
    return filteredJobs;
  }, [filteredJobs]);

  /**
   * Pagination
   */
  const { currentItems, currentPage, totalPages, goToPage } =
    usePagination(memoizedJobs);

  /**
   * Memoize current page items
   */
  const memoizedCurrentItems = useMemo(() => {
    return currentItems;
  }, [currentItems]);

  /**
   * Infinite Scroll
   */
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setPage((prev) => prev + 1);
  }, [loading, hasMore]);

  const { lastElementRef } = useInfiniteScroll(loading, hasMore, loadMore);

  /**
   * Memoize Filters
   */
  const memoizedFilters = useMemo(() => {
    return filters;
  }, [filters]);

  /**
   * Memoize JobList Props
   */
  const jobListProps = useMemo(
    () => ({
      jobs: memoizedCurrentItems,
      currentPage,
      totalPages,
      onPageChange: goToPage,
      loading,
      lastElementRef,
    }),
    [
      memoizedCurrentItems,
      currentPage,
      totalPages,
      goToPage,
      loading,
      lastElementRef,
    ],
  );

  /**
   * Loading State
   */
  if (loading) {
    return (
      <DashboardLayout>
        <SkeletonTable />
      </DashboardLayout>
    );
  }

  /**
   * Error State
   */
  if (error) {
    return (
      <DashboardLayout>
        <ErrorFallback
          title="Unable to load jobs"
          message={error}
          onRetry={fetchJobs}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="jobs-page">
        <h1 className="jobs-heading">Find Your Dream Job</h1>

        <p className="jobs-subtitle">
          Browse the latest opportunities from top companies.
        </p>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <FilterPanel filters={memoizedFilters} onChange={updateFilter} />

        <SortDropdown value={sortBy} onChange={setSortBy} />

        <ActiveFilters
          searchTerm={searchTerm}
          filters={memoizedFilters}
          clearFilters={clearFilters}
        />

        <JobList {...jobListProps} />
      </div>
    </DashboardLayout>
  );
};

export default Jobs;
