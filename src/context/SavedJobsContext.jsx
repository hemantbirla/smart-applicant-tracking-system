import { createContext, useContext, useEffect, useState } from "react";

const SavedJobsContext = createContext();

export const SavedJobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);

  // Load from LocalStorage
  useEffect(() => {
    const jobs = localStorage.getItem("savedJobs");

    if (jobs) {
      setSavedJobs(JSON.parse(jobs));
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "savedJobs",
      JSON.stringify(savedJobs)
    );
  }, [savedJobs]);

  /**
   * Save Job
   */
  const saveJob = (job) => {
    setSavedJobs((prev) => {
      const exists = prev.some(
        (item) => item.id === job.id
      );

      if (exists) return prev;

      return [...prev, job];
    });
  };

  /**
   * Remove Job
   */
  const removeJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.filter((job) => job.id !== jobId)
    );
  };

  /**
   * Toggle Save
   */
  const toggleSave = (job) => {
    const exists = savedJobs.some(
      (item) => item.id === job.id
    );

    if (exists) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  };

  /**
   * Check Saved
   */
  const isSaved = (jobId) => {
    return savedJobs.some(
      (job) => job.id === jobId
    );
  };

  /**
   * Clear Saved Jobs
   */
  const clearSavedJobs = () => {
    setSavedJobs([]);
  };

  return (
    <SavedJobsContext.Provider
      value={{
        savedJobs,
        saveJob,
        removeJob,
        toggleSave,
        isSaved,
        clearSavedJobs,
      }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
};

export const useSavedJobs = () => {
  const context = useContext(SavedJobsContext);

  if (!context) {
    throw new Error(
      "useSavedJobs must be used within SavedJobsProvider"
    );
  }

  return context;
};

export default SavedJobsContext;