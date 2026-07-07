import { FiMapPin, FiUsers, FiBriefcase, FiGlobe, FiMail } from "react-icons/fi";

import { companySummary } from "../../../constants/recruiterDashboardData";

const CompanySummary = () => {
  return (
    <section className="dashboard-section">
      <h2 className="section-title">Company Summary</h2>

      <div className="company-card">
        <div className="company-header">
          <img
            src={companySummary.logo}
            alt={companySummary.companyName}
            className="company-logo"
          />

          <div>
            <h3>{companySummary.companyName}</h3>

            <p>{companySummary.industry}</p>
          </div>
        </div>

        <div className="company-grid">
          <div className="company-item">
            <FiMapPin />

            <span>{companySummary.location}</span>
          </div>

          <div className="company-item">
            <FiUsers />

            <span>{companySummary.employees} Employees</span>
          </div>

          <div className="company-item">
            <FiBriefcase />

            <span>{companySummary.openPositions} Open Positions</span>
          </div>

          <div className="company-item">
            <FiGlobe />

            <span>{companySummary.website}</span>
          </div>

          <div className="company-item">
            <FiMail />

            <span>{companySummary.email}</span>
          </div>
        </div>

        <div className="company-footer">
          <strong>Recruiter</strong>

          <span>{companySummary.recruiter}</span>
        </div>
      </div>
    </section>
  );
};

export default CompanySummary;