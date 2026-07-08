import JobRow from "./JobRow";

const JobTable = ({
  jobs = [],
  loading,
  onView,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="jobs-loading">
        Loading jobs...
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <div className="jobs-empty">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="job-table-wrapper">
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>

            <th>Location</th>

            <th>Job Type</th>

            <th>Experience</th>

            <th>Status</th>

            <th>Posted</th>

            <th>Applicants</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;