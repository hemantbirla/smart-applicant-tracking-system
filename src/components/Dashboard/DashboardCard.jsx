import "./../../styles/dashboard.css";

const DashboardCard = ({ title, count, icon: Icon, color }) => {
  return (
    <div className="dashboard-card">
      <div
        className="dashboard-card-icon"
        style={{ backgroundColor: color }}
      >
        <Icon className="dashboard-icon" />
      </div>

      <div className="dashboard-card-content">
        <h3>{count}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default DashboardCard;