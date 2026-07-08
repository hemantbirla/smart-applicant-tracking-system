import InterviewStatusBadge from "./InterviewStatusBadge";
import InterviewActions from "./InterviewActions";

import "../../styles/interview.css";

const InterviewDetailsModal = ({
  isOpen,
  interview,
  onClose,
  onEdit,
  onCancel,
}) => {
  if (!isOpen || !interview) return null;

  return (
    <div className="modal-overlay">
      <div className="interview-modal">
        <div className="modal-header">
          <h2>Interview Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="modal-body">

          <div className="detail-row">
            <span>Candidate</span>
            <strong>{interview.candidate}</strong>
          </div>

          <div className="detail-row">
            <span>Job</span>
            <strong>{interview.job}</strong>
          </div>

          <div className="detail-row">
            <span>Interview Type</span>
            <strong>{interview.type}</strong>
          </div>

          <div className="detail-row">
            <span>Date</span>
            <strong>{interview.date}</strong>
          </div>

          <div className="detail-row">
            <span>Time</span>
            <strong>{interview.time}</strong>
          </div>

          <div className="detail-row">
            <span>Duration</span>
            <strong>{interview.duration} mins</strong>
          </div>

          <div className="detail-row">
            <span>Interviewer</span>
            <strong>{interview.interviewer}</strong>
          </div>

          <div className="detail-row">
            <span>Status</span>

            <InterviewStatusBadge
              status={interview.status}
            />
          </div>

          <div className="detail-row">
            <span>Meeting Link</span>

            <a
              href={interview.meetingLink}
              target="_blank"
              rel="noreferrer"
            >
              Join Meeting
            </a>
          </div>

          <div className="detail-row notes">
            <span>Notes</span>

            <p>{interview.notes}</p>
          </div>

          <div className="detail-row">
            <span>Last Updated</span>
            <strong>{interview.updatedAt}</strong>
          </div>
        </div>

        <InterviewActions
          interview={interview}
          onEdit={onEdit}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
};

export default InterviewDetailsModal;