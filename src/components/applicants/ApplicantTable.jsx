import ApplicantRow from "./ApplicantRow";

const ApplicantTable = ({
  applicants,
  loading = false,
  onViewApplicant,
}) => {
  if (loading) {
    return (
      <div className="applicant-loading">
        Loading applicants...
      </div>
    );
  }

  if (!applicants.length) {
    return (
      <div className="applicant-empty">
        No applicants found.
      </div>
    );
  }

  return (
    <div className="applicant-table-wrapper">
      <table className="applicant-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Skills</th>
            <th>Applied</th>
            <th>Status</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {applicants.map((applicant) => (
            <ApplicantRow
              key={applicant.id}
              applicant={applicant}
              onView={onViewApplicant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantTable;