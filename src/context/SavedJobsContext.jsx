import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getSavedJobs,
  setSavedJobs,
  removeSavedJobs,
} from "../utils/storage";

const SavedJobsContext = createContext();

export const SavedJobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobsState] = useState([]);

  /**
   * Load saved jobs on app start
   */
  useEffect(() => {
    const jobs = getSavedJobs();

    setSavedJobsState(jobs);
  }, []);

  /**
   * Persist whenever savedJobs changes
   */
  useEffect(() => {
    setSavedJobs(savedJobs);
  }, [savedJobs]);

  /**
   * Save Job
   */
  const saveJob = (job) => {
    setSavedJobsState((prev) => {
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
    setSavedJobsState((prev) =>
      prev.filter((job) => job.id !== jobId)
    );
  };

  /**
   * Toggle Save / Unsave
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
   * Check if job is saved
   */
  const isSaved = (jobId) => {
    return savedJobs.some(
      (job) => job.id === jobId
    );
  };

  /**
   * Clear all saved jobs
   */
  const clearSavedJobs = () => {
    removeSavedJobs();
    setSavedJobsState([]);
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