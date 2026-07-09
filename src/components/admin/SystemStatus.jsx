import { systemStatus } from "../../constants/adminDashboardData";

const SystemStatus = () => {
  return (
    <section className="admin-section">
      <h2 className="admin-section-title">
        System Health
      </h2>

      <div className="system-status-grid">
        {systemStatus.map((item) => (
          <div
            key={item.id}
            className="system-status-card"
          >
            <div>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>

            <span
              className={`status-badge ${item.status.toLowerCase()}`}
            >
              {item.icon} {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemStatus;