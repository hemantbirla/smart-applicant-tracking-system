import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../styles/jobs.css";

const JobActions = ({
  job,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="job-actions">
      <button
        type="button"
        className="job-action-btn view"
        title="View Job"
        onClick={() => onView(job)}
      >
        <FiEye />
      </button>

      <button
        type="button"
        className="job-action-btn edit"
        title="Edit Job"
        onClick={() => onEdit(job)}
      >
        <FiEdit2 />
      </button>

      <button
        type="button"
        className="job-action-btn delete"
        title="Delete Job"
        onClick={() => onDelete(job)}
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default JobActions;