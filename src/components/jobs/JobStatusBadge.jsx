import { JOB_STATUS } from "../../constants/jobConstants";

const JobStatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case JOB_STATUS.OPEN:
        return "status-open";

      case JOB_STATUS.CLOSED:
        return "status-closed";

      case JOB_STATUS.DRAFT:
        return "status-draft";

      case JOB_STATUS.EXPIRED:
        return "status-expired";

      default:
        return "status-default";
    }
  };

  return (
    <span className={`job-status ${getStatusClass()}`}>
      {status}
    </span>
  );
};

export default JobStatusBadge;