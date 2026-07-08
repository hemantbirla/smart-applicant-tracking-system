import {
  FiEye,
  FiDownload,
  FiCalendar,
  FiRefreshCw,
  FiXCircle,
} from "react-icons/fi";

const ApplicantActions = ({
  applicant,
  onView,
  onResume,
  onSchedule,
  onStatus,
  onReject,
}) => {
  return (
    <div className="applicant-actions">
      <button className="icon-btn" onClick={() => onView(applicant)}>
        <FiEye />
      </button>

      <button className="icon-btn" onClick={() => onResume(applicant)}>
        <FiDownload />
      </button>

      <button className="icon-btn" onClick={() => onSchedule(applicant)}>
        <FiCalendar />
      </button>

      <button className="icon-btn" onClick={() => onStatus(applicant)}>
        <FiRefreshCw />
      </button>

      <button className="icon-btn danger" onClick={() => onReject(applicant)}>
        <FiXCircle />
      </button>
    </div>
  );
};

export default ApplicantActions;
