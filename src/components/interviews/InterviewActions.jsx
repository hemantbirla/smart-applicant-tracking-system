import "../../styles/interview.css";

const InterviewActions = ({
  interview,
  onEdit,
  onCancel,
}) => {
  if (!interview) return null;

  return (
    <div className="interview-actions">
      <button
        className="interview-btn primary"
        onClick={() => onEdit(interview)}
      >
        Edit Interview
      </button>

      <button
        className="interview-btn danger"
        onClick={() => onCancel(interview.id)}
      >
        Cancel Interview
      </button>
    </div>
  );
};

export default InterviewActions;