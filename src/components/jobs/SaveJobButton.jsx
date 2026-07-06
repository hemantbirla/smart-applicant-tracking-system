import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import useSavedJobs from "../../hooks/useSavedJobs";

const SaveJobButton = ({ job }) => {
  const { toggleSave, isSaved } = useSavedJobs();

  const saved = isSaved(job.id);

  return (
    <button
      className={`save-job-btn ${saved ? "saved" : ""}`}
      onClick={() => toggleSave(job)}
      aria-label="Save Job"
    >
      {saved ? <FaHeart /> : <FiHeart />}
    </button>
  );
};

export default SaveJobButton;