import { useNavigate } from "react-router-dom";

import JobMeta from "./JobMeta";
import JobTags from "./JobTags";
import ApplyButton from "./ApplyButton";

import "../../styles/jobs.css";

const JobCard = ({ job, onSave }) => {
  const navigate = useNavigate();

  if (!job) return null;

  return (
    <div className="job-card">
      {/* Header */}
      <div className="job-header">
        <div className="job-header-left">
          {job.companyLogo && (
            <img
              src={job.companyLogo}
              alt={job.company}
              className="company-logo"
            />
          )}

          <div>
            <h3 className="job-title">{job.title}</h3>

            <h4 className="company-name">{job.company}</h4>
          </div>
        </div>

        <button
          className={`save-btn ${job.saved ? "active" : ""}`}
          onClick={() => onSave(job.id)}
        >
          {job.saved ? "Saved" : "Save"}
        </button>
      </div>

      {/* Meta */}
      <JobMeta job={job} />

      {/* Skills */}
      <JobTags skills={job.skills} />

      {/* Footer */}
      <div className="job-card-footer">
        <span className="posted-date">
          {job.postedDate || job.postedAt}
        </span>

        <div className="job-card-actions">
          <ApplyButton jobId={job.id} />

          <button
            className="details-btn"
            onClick={() => navigate(`/jobs/${job.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;