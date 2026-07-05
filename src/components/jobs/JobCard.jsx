import { useNavigate } from "react-router-dom";

import JobMeta from "./JobMeta";
import JobTags from "./JobTags";
import ApplyButton from "./ApplyButton";

import "../../styles/jobs.css";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  if (!job) return null;

  return (
    <div className="job-card">

      <div className="job-header">
        <img
          src={job.companyLogo}
          alt={job.company}
          className="company-logo"
        />

        <div>
          <h3>{job.title}</h3>

          <h4>{job.company}</h4>

          <p>{job.postedAt}</p>
        </div>
      </div>

      <JobMeta job={job} />

      <JobTags skills={job.skills} />

      <div className="job-card-actions">

        <ApplyButton />

        <button
          className="details-btn"
          onClick={() => navigate(`/jobs/${job.id}`)}
        >
          View Details
        </button>

      </div>

    </div>
  );
};

export default JobCard;