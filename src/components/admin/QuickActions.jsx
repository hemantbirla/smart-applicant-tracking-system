import { quickActions } from "../../constants/adminDashboardData";

const QuickActions = () => {
  return (
    <section className="admin-section">
      <h2 className="admin-section-title">
        Quick Actions
      </h2>

      <div className="quick-actions-grid">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="quick-action-btn"
            >
              <Icon
                size={22}
                style={{ color: action.color }}
              />

              <span>{action.title}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;