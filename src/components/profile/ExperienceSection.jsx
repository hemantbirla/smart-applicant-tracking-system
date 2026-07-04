import ExperienceCard from "./ExperienceCard";
import { useUser } from "../../context/UserContext";

import "../../styles/profile.css";

const ExperienceSection = () => {
  const { profile, loading } = useUser();

  if (loading) {
    return (
      <section className="experience-section">
        <p>Loading experience...</p>
      </section>
    );
  }

  const experiences = profile?.experiences || [];

  return (
    <section className="experience-section">
      <div className="section-header">
        <h2>Experience</h2>

        <button
          className="primary-btn"
          disabled
        >
          + Add Experience
        </button>
      </div>

      {experiences.length ? (
        experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
          />
        ))
      ) : (
        <div className="empty-state">
          <p>No experience added yet.</p>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;