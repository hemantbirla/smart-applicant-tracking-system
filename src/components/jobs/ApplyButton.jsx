import "../../styles/jobs.css";

const ApplyButton = ({
  applied = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`apply-btn ${
        applied ? "applied" : ""
      }`}
      onClick={onClick}
      disabled={applied}
    >
      {applied
        ? "Applied ✓"
        : "Apply Now"}
    </button>
  );
};

export default ApplyButton;