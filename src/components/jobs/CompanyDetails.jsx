import "../../styles/jobs.css";

const CompanyDetails = ({ job }) => {
  return (
    <div className="company-card">
      <h2>About Company</h2>

      <div className="company-header">
        <img
          src={job.companyLogo}
          alt={job.company}
          className="company-logo"
        />

        <div>
          <h3>{job.company}</h3>
          <p>{job.industry}</p>
        </div>
      </div>

      <div className="company-info">
        <p>
          <strong>Industry:</strong> {job.industry}
        </p>

        <p>
          <strong>Employees:</strong> {job.employees}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Website:</strong>{" "}
          <a
            href={job.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {job.website}
          </a>
        </p>

        <p>
          <strong>About:</strong> {job.companyDescription}
        </p>
      </div>
    </div>
  );
};

export default CompanyDetails;