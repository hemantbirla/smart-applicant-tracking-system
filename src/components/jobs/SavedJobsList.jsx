import { FiHeart } from "react-icons/fi";

import useSavedJobs from "../../hooks/useSavedJobs";
import JobCard from "./JobCard";

const SavedJobList = () => {
  const { savedJobs } = useSavedJobs();

  if (savedJobs.length === 0) {
    return (
      <div className="empty-state">
        <FiHeart className="empty-state-icon" />

        <h2>No Saved Jobs Yet</h2>

        <p>
          Start exploring jobs and save your favorite jobs to apply later.
        </p>
      </div>
    );
  }

  return (
    <div className="jobs-grid">
      {savedJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
};

export default SavedJobList;