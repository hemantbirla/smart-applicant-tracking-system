import { useUser } from "../../context/UserContext";
import EducationCard from "./EducationCard";
import "../../styles/profile.css";

const EducationSection = () => {
  const { profile, loading } = useUser();

  if (loading) {
    return <p>Loading education...</p>;
  }

  const education = profile?.education ?? [];

  return (
    <section className="education-section">
      <div className="section-header">
        <h2>Education</h2>

        <button className="add-btn" disabled>
          + Add Education
        </button>
      </div>

      {education.length === 0 ? (
        <p className="empty-state">No education added yet.</p>
      ) : (
        <div className="education-list">
          {education.map((item) => (
            <EducationCard
              key={item.id}
              education={item}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default EducationSection;