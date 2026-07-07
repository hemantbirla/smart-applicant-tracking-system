const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div>
        <h3>{job.title}</h3>

        <p>{job.applications} Applications</p>
      </div>

      <span
        className={`job-status ${job.status.toLowerCase()}`}
      >
        {job.status}
      </span>
    </div>
  );
};

export default JobCard;