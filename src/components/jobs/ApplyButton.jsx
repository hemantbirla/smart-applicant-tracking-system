import { useState } from "react";

import { toast } from "react-toastify";

const ApplyButton = ({ jobId, applied = false, onApply }) => {
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    if (applied) {
      toast.info("You have already applied for this job.");
      return;
    }

    if (onApply) {
      onApply(jobId);
      return;
    }

    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Application submitted successfully.");
    } catch (error) {
      toast.error("Failed to apply for the job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={`apply-btn ${applied ? "applied" : ""}`}
      onClick={handleApply}
      disabled={loading || applied}
    >
      {loading ? "Applying..." : applied ? "Applied" : "Apply Now"}
    </button>
  );
};

export default ApplyButton;
