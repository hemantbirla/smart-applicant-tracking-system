import { FiHeart } from "react-icons/fi";

const EmptySavedJobs = () => {
  return (
    <div className="empty-saved-jobs">
      <FiHeart className="empty-icon" />

      <h2>No Saved Jobs Yet</h2>

      <p>
        Start exploring jobs and save your favorites to apply later.
      </p>
    </div>
  );
};

export default EmptySavedJobs;