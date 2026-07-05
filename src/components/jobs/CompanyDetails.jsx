import {
  FiBriefcase,
  FiUsers,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";

const CompanyDetails = ({ job }) => {
  if (!job) return null;

  return (
    <section className="company-card">
      <h2 className="section-title">
        Company Details
      </h2>

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
        <div className="company-item">
          <FiBriefcase />
          <span>{job.industry}</span>
        </div>

        <div className="company-item">
          <FiUsers />
          <span>{job.employees}</span>
        </div>

        <div className="company-item">
          <FiMapPin />
          <span>{job.location}</span>
        </div>

        <div className="company-item">
          <FiGlobe />
          <a
            href={job.website}
            target="_blank"
            rel="noreferrer"
          >
            {job.website}
          </a>
        </div>
      </div>

      <div className="company-description">
        <h4>About Company</h4>

        <p>{job.companyDescription}</p>
      </div>
    </section>
  );
};

export default CompanyDetails;