const JobTags = ({ skills = [] }) => {
  return (
    <div className="job-tags">
      {skills.map((skill) => (
        <span
          key={skill}
          className="job-tag"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default JobTags;