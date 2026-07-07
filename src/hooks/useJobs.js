import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getJobs,
  createJob as createJobService,
  updateJob as updateJobService,
  deleteJob as deleteJobService,
} from "../services/jobService";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    status: "",
    experience: "",
    sortBy: "",
  });

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });

  /**
   * Fetch Jobs
   */
  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getJobs();

      const jobsData = Array.isArray(response) ? response : response.jobs || [];

      setJobs(jobsData);

      setPagination((prev) => ({
        ...prev,
        total: jobsData.length,
      }));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load jobs.");
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Create Job
   */
  const createJob = async (jobData) => {
    try {
      setLoading(true);

      const createdJob = await createJobService(jobData);

      setJobs((prev) => [createdJob, ...prev]);

      return createdJob;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Update Job
   */
  const updateJob = async (id, jobData) => {
    try {
      setLoading(true);

      const updatedJob = await updateJobService(id, jobData);

      setJobs((prev) => prev.map((job) => (job.id === id ? updatedJob : job)));

      return updatedJob;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Delete Job
   */
  const deleteJob = async (id) => {
    try {
      setLoading(true);

      await deleteJobService(id);

      setJobs((prev) => prev.filter((job) => job.id !== id));
    } finally {
      setLoading(false);
    }
  };

  /**
   * Apply Filters
   */
  const filteredJobs = useMemo(() => {
    let data = [...jobs];

    // Search
    if (filters.search.trim()) {
      const keyword = filters.search.toLowerCase();

      data = data.filter((job) =>
        [job.title, job.company, job.location, job.description, job.skills]
          .join(" ")
          .toLowerCase()
          .includes(keyword),
      );
    }

    // Location
    if (filters.location) {
      data = data.filter((job) => job.location === filters.location);
    }

    // Job Type
    if (filters.jobType) {
      data = data.filter((job) => job.jobType === filters.jobType);
    }

    // Status
    if (filters.status) {
      data = data.filter((job) => job.status === filters.status);
    }

    // Experience
    if (filters.experience) {
      data = data.filter((job) => job.experience === filters.experience);
    }

    // Sorting
    switch (filters.sortBy) {
      case "latest":
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;

      case "oldest":
        data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;

      case "title":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        break;
    }

    return data;
  }, [jobs, filters]);

  /**
   * Pagination
   */
  const totalPages = Math.ceil(filteredJobs.length / pagination.limit);

  const paginatedJobs = filteredJobs.slice(
    (pagination.page - 1) * pagination.limit,
    pagination.page * pagination.limit,
  );

  /**
   * Update Filters
   */
  const updateFilters = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));

    // Reset to first page
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  };

  /**
   * Update Pagination
   */
  const updatePagination = (newPagination) => {
    setPagination((prev) => ({
      ...prev,
      ...newPagination,
    }));
  };

  /**
   * Refetch
   */
  const refetch = () => {
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return {
    jobs: paginatedJobs,

    loading,

    error,

    filters,

    pagination,

    totalPages,

    fetchJobs,

    createJob,

    updateJob,

    deleteJob,

    refetch,

    updateFilters,

    updatePagination,
  };
};

export default useJobs;
