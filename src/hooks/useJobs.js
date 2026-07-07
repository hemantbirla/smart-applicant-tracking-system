import { useCallback, useEffect, useState } from "react";

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

      /**
       * Supports:
       *
       * API:
       * {
       *   jobs: [],
       *   total: 20
       * }
       *
       * OR
       *
       * Fake API:
       * []
       */

      if (Array.isArray(response)) {
        setJobs(response);

        setPagination((prev) => ({
          ...prev,
          total: response.length,
        }));
      } else {
        setJobs(response.jobs || []);

        setPagination((prev) => ({
          ...prev,
          total: response.total || 0,
        }));
      }
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

      setJobs((prev) =>
        prev.map((job) =>
          job.id === id ? updatedJob : job
        )
      );

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

      setJobs((prev) =>
        prev.filter((job) => job.id !== id)
      );
    } finally {
      setLoading(false);
    }
  };

  /**
   * Refetch Jobs
   */
  const refetch = () => {
    fetchJobs();
  };

  /**
   * Update Filters
   */
  const updateFilters = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  /**
   * Update Pagination
   */
  const updatePagination = (data) => {
    setPagination((prev) => ({
      ...prev,
      ...data,
    }));
  };

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return {
    jobs,

    loading,

    error,

    filters,

    pagination,

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