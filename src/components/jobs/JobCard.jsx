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
    <div className="job-card-body">
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