import { STATUS_COLORS } from "../../constants/applicantStatus";

const ApplicantStatusBadge = ({ status }) => {
  const badgeClass =
    STATUS_COLORS[status] || "status-default";

  return (
    <span className={`applicant-status ${badgeClass}`}>
      {status}
    </span>
  );
};

export default ApplicantStatusBadge;