import ApplicantStatusBadge from "./ApplicantStatusBadge";

const ApplicantRow = ({ applicant }) => {
  const fullName = `${applicant.firstName} ${applicant.lastName}`;

  const initials = `${applicant.firstName?.charAt(0) ?? ""}${applicant.lastName?.charAt(0) ?? ""}`;

  return (
    <tr className="applicant-row">
      {/* Candidate */}
      <td>
        <div className="candidate-info">
          <div className="candidate-avatar">{initials}</div>

          <div>
            <h4>{fullName}</h4>
          </div>
        </div>
      </td>

      {/* Email */}
      <td>{applicant.email}</td>

      {/* Experience */}
      <td>{applicant.experience}</td>

      {/* Skills */}
      <td>
        <div className="skills-list">
          {applicant.skills.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </td>

      {/* Applied */}
      <td>{applicant.appliedDate}</td>

      {/* Status */}
      <td>
        <ApplicantStatusBadge status={applicant.status} />
      </td>

      {/* Resume */}
      <td>
        <button className="resume-btn">View Resume</button>
      </td>

      {/* Actions */}
      <td>
        <div className="action-buttons">
          <button className="view-btn">View</button>

          <button className="status-btn">Change Status</button>
        </div>
      </td>
    </tr>
  );
};

export default ApplicantRow;
