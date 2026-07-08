import InterviewStatusBadge from "./InterviewStatusBadge";

const InterviewCard = ({ interview, onView, onEdit, onCancel }) => {
  return (
    <div className="interview-card">
      <div className="interview-card-header">
        <div>
          <h3>{interview.candidate}</h3>
          <p>{interview.job}</p>
        </div>

        <InterviewStatusBadge status={interview.status} />
      </div>

      <div className="interview-grid">
        <div>
          <span>Interview Type</span>
          <strong>{interview.type}</strong>
        </div>

        <div>
          <span>Interviewer</span>
          <strong>{interview.interviewer}</strong>
        </div>

        <div>
          <span>Date</span>
          <strong>{interview.date}</strong>
        </div>

        <div>
          <span>Time</span>
          <strong>{interview.time}</strong>
        </div>

        <div>
          <span>Duration</span>
          <strong>{interview.duration} mins</strong>
        </div>
      </div>

      <div className="interview-actions">
        <button className="interview-btn" onClick={() => onView(interview)}>
          View
        </button>

        <button className="btn-secondary" onClick={() => onEdit(interview)}>
          Edit
        </button>

        <button className="btn-danger" onClick={() => onCancel(interview.id)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
