import { topCompanies } from "../../constants/adminDashboardData";

const TopCompanies = () => {
  return (
    <section className="admin-section">
      <h2 className="admin-section-title">
        Top Companies
      </h2>

      <div className="company-list">
        {topCompanies.map((company) => (
          <div
            key={company.id}
            className="company-card"
          >
            <h3>{company.name}</h3>

            <div className="company-info">
              <p>
                <strong>Jobs Posted:</strong>{" "}
                {company.jobs}
              </p>

              <p>
                <strong>
                  Applications:
                </strong>{" "}
                {company.applications}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCompanies;