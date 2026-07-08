import {
  INTERVIEW_STATUS,
} from "../../constants/interviewStatus";

import "../../styles/interview.css";

const InterviewStatusBadge = ({
  status,
}) => {
  const getStatusClass = () => {
    switch (status) {
      case INTERVIEW_STATUS.SCHEDULED:
        return "scheduled";

      case INTERVIEW_STATUS.CONFIRMED:
        return "confirmed";

      case INTERVIEW_STATUS.COMPLETED:
        return "completed";

      case INTERVIEW_STATUS.CANCELLED:
        return "cancelled";

      case INTERVIEW_STATUS.RESCHEDULED:
        return "rescheduled";

      case INTERVIEW_STATUS.NO_SHOW:
        return "noshow";

      default:
        return "";
    }
  };

  return (
    <span
      className={`status-badge ${getStatusClass()}`}
    >
      {status}
    </span>
  );
};

export default InterviewStatusBadge;