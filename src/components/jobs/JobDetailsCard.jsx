import JobTags from "./JobTags";
import JobMeta from "./JobMeta";

const JobDetailsCard = ({ job }) => {
  return (
    <div className="job-details-card">
      <h1>{job.title}</h1>

      <h3>{job.company}</h3>

      <JobMeta job={job} />

      <JobTags skills={job.skills} />

      <div className="job-section">
        <h2>Description</h2>

        <p>{job.description}</p>
      </div>

      <div className="job-section">
        <h2>Responsibilities</h2>

        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="job-section">
        <h2>Requirements</h2>

        <ul>
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="job-section">
        <h2>Benefits</h2>

        <ul>
          {job.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetailsCard;