import InterviewCard from "./InterviewCard";

const InterviewList = ({
  interviews,
  onView,
  onEdit,
  onCancel,
}) => {
  if (!interviews.length) {
    return (
      <div className="empty-state">
        No interviews found.
      </div>
    );
  }

  return (
    <div className="interview-list">
      {interviews.map((interview) => (
        <InterviewCard
          key={interview.id}
          interview={interview}
          onView={onView}
          onEdit={onEdit}
          onCancel={onCancel}
        />
      ))}
    </div>
  );
};

export default InterviewList;