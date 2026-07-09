import "./../../styles/adminDashboard.css";

const AdminHeader = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="admin-header">
      <div className="admin-header-left">
        <h1 className="admin-title">
          Welcome Admin 👋
        </h1>

        <p className="admin-subtitle">
          Manage users, recruiters, jobs and monitor the ATS platform.
        </p>
      </div>

      <div className="admin-header-right">
        <div className="admin-info-card">
          <span className="admin-info-label">
            Today
          </span>

          <span className="admin-info-value">
            {today}
          </span>
        </div>

        <div className="admin-info-card">
          <span className="admin-info-label">
            Last Login
          </span>

          <span className="admin-info-value">
            Today, 09:30 AM
          </span>
        </div>

        <div className="admin-info-card">
          <span className="admin-info-label">
            Notifications
          </span>

          <span className="admin-info-value">
            🔔 8 New
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;