import JobStatusBadge from "./JobStatusBadge";
import JobActions from "./JobActions";

const JobRow = ({
  job,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <tr>
      <td>{job.title}</td>

      <td>{job.location}</td>

      <td>{job.employmentType}</td>

      <td>{job.experience} Years</td>

      <td>
        <JobStatusBadge
          status={job.status || "Open"}
        />
      </td>

      <td>{job.postedAt}</td>

      <td>{job.applicants || 0}</td>

      <td>
        <JobActions
          job={job}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
};

export default JobRow;