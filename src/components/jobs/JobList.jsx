import JobCard from "./JobCard";

const JobList = ({ jobs = [], onSave }) => {
  if (!jobs.length) {
    return (
      <div className="jobs-empty">
        <h3>No jobs found</h3>

        <p>Try changing your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onSave={onSave}
        />
      ))}
    </div>
  );
};

export default JobList;