import { FiClock } from "react-icons/fi";

import { recentActivities } from "../../constants/adminDashboardData";

const RecentActivities = () => {
  return (
    <div className="admin-section">
      <h2 className="admin-section-title">
        Recent Activities
      </h2>

      <div className="activity-list">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="activity-item"
          >
            <div className="activity-icon">
              <FiClock />
            </div>

            <div className="activity-content">
              <p className="activity-text">
                <strong>{activity.user}</strong>{" "}
                {activity.action}{" "}
                <strong>{activity.target}</strong>

                {activity.company &&
                  ` at ${activity.company}`}
              </p>

              <span className="activity-time">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;