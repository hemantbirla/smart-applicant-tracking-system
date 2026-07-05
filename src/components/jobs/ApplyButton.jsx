const ApplyButton = ({ onApply }) => {
  return (
    <button
      className="apply-btn"
      onClick={onApply}
    >
      Apply Now
    </button>
  );
};

export default ApplyButton;