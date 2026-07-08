import InterviewCard from "./InterviewCard";

const InterviewList = ({
  interviews,
  onView,
  onEdit,
  onCancel,
}) => {
  // console.log("Interview List:", interviews);

  return (
    <div>
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