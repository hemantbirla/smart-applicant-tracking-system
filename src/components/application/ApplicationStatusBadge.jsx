import "../../styles/application.css";

const statusClass = {
  Applied: "status-applied",

  "Under Review": "status-review",

  "Interview Scheduled": "status-interview",

  Offer: "status-offer",

  Rejected: "status-rejected",

  Withdrawn: "status-withdrawn",
};

const ApplicationStatusBadge = ({ status }) => {
  return (
    <span
      className={`application-status ${statusClass[status]}`}
    >
      {status}
    </span>
  );
};

export default ApplicationStatusBadge;