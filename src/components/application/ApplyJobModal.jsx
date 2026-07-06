import { useState } from "react";
import { toast } from "react-toastify";

import useApplications from "../../hooks/useApplications";

import "../../styles/application.css";

const ApplyJobModal = ({ job, onClose, onSuccess }) => {
  const { apply, isAlreadyApplied } = useApplications();

  const [form, setForm] = useState({
    resume: "My_Resume.pdf",
    coverLetter: "",
    linkedin: "",
    portfolio: "",
  });

  const [loading, setLoading] = useState(false);

  if (!job) return null;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Submit clicked");

    if (isAlreadyApplied(job.id)) {
      console.log("Already applied");

      toast.info("You have already applied for this job.");
      return;
    }

    if (!form.coverLetter.trim()) {
      console.log("Cover letter missing");

      toast.error("Cover Letter is required.");
      return;
    }

    try {
      console.log("Calling apply()");

      setLoading(true);

      const result = await apply(job.id, {
        company: job.company,
        position: job.title,
        resume: form.resume,
        coverLetter: form.coverLetter,
        linkedin: form.linkedin,
        portfolio: form.portfolio,
      });

      console.log("Apply returned:", result);

      toast.success("Application submitted successfully.");

      if (onSuccess) {
        console.log("Refreshing applications");
        await onSuccess();
      }

      console.log("Closing modal");

      onClose();
    } catch (error) {
      console.error("Submit Error:", error);

      toast.error(error.message || "Unable to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Apply for {job.title}</h2>

        <div className="form-group">
          <label>Resume</label>

          <select name="resume" value={form.resume} onChange={handleChange}>
            <option value="My_Resume.pdf">My_Resume.pdf</option>

            <option value="Updated_Resume.pdf">Updated_Resume.pdf</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cover Letter</label>

          <textarea
            rows="5"
            name="coverLetter"
            placeholder="Write your cover letter..."
            value={form.coverLetter}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>LinkedIn URL</label>

          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            value={form.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Portfolio URL</label>

          <input
            type="url"
            name="portfolio"
            placeholder="https://yourportfolio.com"
            value={form.portfolio}
            onChange={handleChange}
          />
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobModal;
