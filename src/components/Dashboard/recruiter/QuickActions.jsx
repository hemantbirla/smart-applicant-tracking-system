import { useNavigate } from "react-router-dom";

import { quickActions } from "../../../constants/quickActions";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard-section">
      <h2 className="section-title">Quick Actions</h2>

      <div className="quick-actions-grid">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="quick-action-card"
              onClick={() => navigate(action.path)}
            >
              <Icon className="quick-action-icon" />

              <span>{action.title}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;