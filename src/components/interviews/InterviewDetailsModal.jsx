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

            <strong>
              {interview.candidate}
            </strong>
          </div>

          <div className="detail-row">
            <span>Job</span>

            <strong>
              {interview.job}
            </strong>
          </div>

          <div className="detail-row">
            <span>Interview Type</span>

            <strong>
              {interview.type}
            </strong>
          </div>

          <div className="detail-row">
            <span>Status</span>

            <InterviewStatusBadge
              status={interview.status}
            />
          </div>

          <div className="detail-row">
            <span>Date</span>

            <strong>
              {interview.date}
            </strong>
          </div>

          <div className="detail-row">
            <span>Time</span>

            <strong>
              {interview.time}
            </strong>
          </div>

          <div className="detail-row">
            <span>Duration</span>

            <strong>
              {interview.duration} Minutes
            </strong>
          </div>

          <div className="detail-row">
            <span>Interviewer</span>

            <strong>
              {interview.interviewer}
            </strong>
          </div>

          <div className="detail-row full-width">
            <span>Meeting Link</span>

            {interview.meetingLink ? (
              <a
                href={interview.meetingLink}
                target="_blank"
                rel="noreferrer"
              >
                Join Meeting
              </a>
            ) : (
              <strong>
                Not Available
              </strong>
            )}
          </div>

          <div className="detail-row full-width notes">
            <span>Notes</span>

            <p>
              {interview.notes ||
                "No notes added."}
            </p>
          </div>

          <div className="detail-row">
            <span>Last Updated</span>

            <strong>
              {interview.updatedAt ||
                "Just Now"}
            </strong>
          </div>
        </div>

        <div className="modal-footer">
          <InterviewActions
            interview={interview}
            onEdit={onEdit}
            onCancel={onCancel}
          />

          <button
            className="btn-secondary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetailsModal;