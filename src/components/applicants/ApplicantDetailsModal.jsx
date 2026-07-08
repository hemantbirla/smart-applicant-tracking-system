import ResumeViewer from "./ResumeViewer";

const ApplicantDetailsModal = ({
  applicant,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !applicant) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">

        <div className="modal-header">
          <h2>{applicant.name}</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">

          <div className="detail-row">
            <strong>Email</strong>
            <span>{applicant.email}</span>
          </div>

          <div className="detail-row">
            <strong>Phone</strong>
            <span>{applicant.phone}</span>
          </div>

          <div className="detail-row">
            <strong>Experience</strong>
            <span>{applicant.experience}</span>
          </div>

          <div className="detail-row">
            <strong>Skills</strong>

            <div className="skills-wrapper">
              {applicant.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-row">
            <strong>Education</strong>
            <span>{applicant.education}</span>
          </div>

          <div className="detail-row">
            <strong>Status</strong>
            <span>{applicant.status}</span>
          </div>

          <ResumeViewer applicant={applicant} />

        </div>
      </div>
    </div>
  );
};

export default ApplicantDetailsModal;