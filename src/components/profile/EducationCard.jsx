import "../../styles/profile.css";

const EducationCard = ({ education }) => {
  const {
    degree,
    college,
    university,
    passingYear,
    percentage,
  } = education;

  return (
    <div className="education-card">
      <div className="education-header">
        <h3>{degree}</h3>
      </div>

      <div className="education-body">
        <div className="education-item">
          <span>College</span>
          <strong>{college || "-"}</strong>
        </div>

        <div className="education-item">
          <span>University</span>
          <strong>{university || "-"}</strong>
        </div>

        <div className="education-item">
          <span>Passing Year</span>
          <strong>{passingYear || "-"}</strong>
        </div>

        <div className="education-item">
          <span>Percentage / CGPA</span>
          <strong>{percentage || "-"}</strong>
        </div>
      </div>

      {/* CRUD functionality will be added later */}
      <div className="education-actions">
        <button className="edit-btn" disabled>
          Edit
        </button>

        <button className="delete-btn" disabled>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EducationCard;