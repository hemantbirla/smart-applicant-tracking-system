import "../../styles/profile.css";

const ExperienceCard = ({ experience }) => {
  const {
    company,
    designation,
    duration,
    employmentType,
    description = [],
  } = experience;

  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>{company}</h3>

          <h4>{designation}</h4>

          <p className="experience-duration">{duration}</p>

          {employmentType && (
            <span className="employment-type">
              {employmentType}
            </span>
          )}
        </div>
      </div>

      {description.length > 0 && (
        <div className="experience-description">
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;