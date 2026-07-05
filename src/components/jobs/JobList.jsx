import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="empty-jobs">
        <h3>No Jobs Found</h3>
        <p>Please check again later.</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
};

export default JobList;