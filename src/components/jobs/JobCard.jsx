import { useNavigate } from "react-router-dom";

import JobMeta from "./JobMeta";
import JobTags from "./JobTags";
import ApplyButton from "./ApplyButton";
import SaveJobButton from "./SaveJobButton";

import useSavedJobs from "../../hooks/useSavedJobs";

import "../../styles/jobs.css";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const { toggleSave, isSaved } = useSavedJobs();

  if (!job) return null;

  const saved = isSaved(job.id);

  return (
    <div className="job-card">
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

        <SaveJobButton
          saved={saved}
          onToggle={() => toggleSave(job)}
        />
      </div>

      <JobMeta job={job} />

      <JobTags skills={job.skills} />

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