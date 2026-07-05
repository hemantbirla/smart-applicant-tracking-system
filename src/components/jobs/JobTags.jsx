const JobTags = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <div className="job-tags">
      {skills.map((skill, index) => (
        <span key={index} className="job-tag">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default JobTags;