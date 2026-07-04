import "../../styles/dashboard.css";

const ApplicationCard = ({
  jobTitle,
  company,
  status,
  appliedOn,
}) => {
  return (
    <div className="application-card">
      <div className="application-info">
        <h3>{jobTitle}</h3>

        <p className="company-name">{company}</p>
      </div>

      <div className="application-meta">
        <span
          className={`status ${status.toLowerCase()}`}
        >
          {status}
        </span>

        <small>{appliedOn}</small>
      </div>
    </div>
  );
};

export default ApplicationCard;