import { userSummary } from "../../constants/adminDashboardData";

const UserSummary = () => {
  return (
    <div className="admin-section-card">
      <h3 className="admin-section-title">
        User Summary
      </h3>

      <div className="summary-grid">
        <div className="summary-item">
          <span className="summary-label">
            Candidates
          </span>

          <span className="summary-value">
            {userSummary.candidates}
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">
            Recruiters
          </span>

          <span className="summary-value">
            {userSummary.recruiters}
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">
            Admins
          </span>

          <span className="summary-value">
            {userSummary.admins}
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">
            New Users Today
          </span>

          <span className="summary-value">
            {userSummary.newUsersToday}
          </span>
        </div>

        <div className="summary-item">
          <span className="summary-label">
            Inactive Users
          </span>

          <span className="summary-value">
            {userSummary.inactiveUsers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserSummary;