import { useNavigate } from "react-router-dom";

import JobMeta from "./JobMeta";
import JobTags from "./JobTags";
import ApplyButton from "./ApplyButton";

import "../../styles/jobs.css";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  if (!job) return null;

  const handleApply = () => {
    alert(`Applied for ${job.title}`);
  };

  return (
    <div className="job-card">
      <div className="job-header">
        <div>
          <h2>{job.title}</h2>

          <h4>{job.company}</h4>
        </div>

        <span className="posted-date">
          {job.postedAt}
        </span>
      </div>

      <JobMeta
        location={job.location}
        experience={job.experience}
        salary={job.salary}
        employmentType={job.employmentType}
      />

      <JobTags skills={job.skills} />

      <div className="job-footer">
        <ApplyButton onApply={handleApply} />

        <button
          className="details-btn"
          onClick={() =>
            navigate(`/jobs/${job.id}`)
          }
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;