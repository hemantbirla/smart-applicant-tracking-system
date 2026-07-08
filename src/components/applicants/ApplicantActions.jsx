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
}) => {
  return (
    <div className="applicant-actions">

      <button
        className="icon-btn"
        onClick={() => onView(applicant)}
      >
        <FiEye />
      </button>

      <button className="icon-btn">
        <FiDownload />
      </button>

      <button className="icon-btn">
        <FiCalendar />
      </button>

      <button className="icon-btn">
        <FiRefreshCw />
      </button>

      <button className="icon-btn danger">
        <FiXCircle />
      </button>

    </div>
  );
};

export default ApplicantActions;