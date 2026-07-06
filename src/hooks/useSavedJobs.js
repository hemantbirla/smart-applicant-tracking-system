import { useContext } from "react";

import SavedJobsContext from "../context/SavedJobsContext";

const useSavedJobs = () => {
  const context = useContext(SavedJobsContext);

  if (!context) {
    throw new Error(
      "useSavedJobs must be used within a SavedJobsProvider"
    );
  }

  return context;
};

export default useSavedJobs;