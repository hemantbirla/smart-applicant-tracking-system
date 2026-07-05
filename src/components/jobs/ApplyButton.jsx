const ApplyButton = ({ jobId }) => {
  const handleApply = () => {
    alert(`Applied to job ID: ${jobId}`);
  };

  return (
    <button className="apply-btn" onClick={handleApply}>
      Apply Now
    </button>
  );
};

export default ApplyButton;