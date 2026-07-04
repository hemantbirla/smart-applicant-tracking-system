import SkillChip from "./SkillChip";
import { useUser } from "../../context/UserContext";

import "../../styles/profile.css";

const SkillsSection = () => {
  const { profile } = useUser();

  const skills = profile?.skills ?? [];

  return (
    <section className="skills-section-card">
      <div className="section-header">
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skills.length ? (
          skills.map((skill) => (
            <SkillChip
              key={skill}
              skill={skill}
            />
          ))
        ) : (
          <p className="text-muted">No skills added.</p>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;