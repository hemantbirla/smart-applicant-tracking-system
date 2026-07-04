import "../../styles/profile.css";

const SkillChip = ({ skill }) => {
  return (
    <span className="skill-chip">
      {skill}
    </span>
  );
};

export default SkillChip;