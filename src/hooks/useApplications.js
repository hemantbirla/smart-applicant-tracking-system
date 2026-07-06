import { useEffect, useState } from "react";

import {
  getApplications,
  applyJob,
  withdrawApplication,
} from "../services/applicationService";

const useApplications = () => {
  const [applications, setApplications] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  /**
   * Load Applications
   */
  const loadApplications = async () => {
    try {
      setLoading(true);

      const data = await getApplications();

      setApplications(data);

      setError("");
    } catch (err) {
      console.error(err);

      setError("Failed to load applications.");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Apply for a Job
   */
  const submitApplication = async (
    jobId,
    applicationData
  ) => {
    try {
      setLoading(true);

      const response = await applyJob(
        jobId,
        applicationData
      );

      setApplications((prev) => [
        response,
        ...prev,
      ]);

      return response;
    } catch (err) {
      console.error(err);

      setError("Failed to submit application.");

      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Withdraw Application
   */
  const removeApplication = async (id) => {
    try {
      setLoading(true);

      await withdrawApplication(id);

      setApplications((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: "Withdrawn",
              }
            : item
        )
      );
    } catch (err) {
      console.error(err);

      setError("Failed to withdraw application.");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Check if already applied
   */
  const hasApplied = (jobId) => {
    return applications.some(
      (item) => item.jobId === jobId
    );
  };

  /**
   * Get Application by Job ID
   */
  const getApplication = (jobId) => {
    return applications.find(
      (item) => item.jobId === jobId
    );
  };

  useEffect(() => {
    loadApplications();
  }, []);

  return {
    applications,

    loading,

    error,

    reload: loadApplications,

    submitApplication,

    removeApplication,

    hasApplied,

    getApplication,
  };
};

export default useApplications;