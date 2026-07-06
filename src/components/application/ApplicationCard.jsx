import ApplicationStatusBadge from "./ApplicationStatusBadge";
import WithdrawApplicationButton from "./WithdrawApplicationButton";

const ApplicationCard = ({ application, onWithdraw }) => {
  return (
    <div className="application-card">
      <div className="application-header">
        <div>
          <h3>{application.position}</h3>

          <p>{application.company}</p>
        </div>

        <ApplicationStatusBadge status={application.status} />
      </div>

      <div className="application-details">
        <p>
          <strong>Applied:</strong> {application.appliedDate}
        </p>

        <p>
          <strong>Resume:</strong> {application.resume || "Resume.pdf"}
        </p>
      </div>

      <WithdrawApplicationButton
        application={application}
        onWithdraw={onWithdraw}
      />
    </div>
  );
};

export default ApplicationCard;
