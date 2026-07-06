import axiosInstance from "../api/axios";

/**
 * Get all saved jobs
 */
export const getSavedJobs = async () => {
  const response = await axiosInstance.get("/saved-jobs");

  return response.data;
};

/**
 * Save a job
 */
export const saveJob = async (jobId) => {
  const response = await axiosInstance.post("/saved-jobs", {
    jobId,
  });

  return response.data;
};

/**
 * Remove a saved job
 */
export const removeSavedJob = async (jobId) => {
  const response = await axiosInstance.delete(
    `/saved-jobs/${jobId}`
  );

  return response.data;
};

/**
 * Toggle saved job
 * (Useful for future API implementations)
 */
export const toggleSavedJob = async (
  jobId,
  isSaved
) => {
  if (isSaved) {
    return removeSavedJob(jobId);
  }

  return saveJob(jobId);
};