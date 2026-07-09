import "../../styles/adminDashboard.css";

const AdminCard = ({
  title,
  count,
  icon: Icon,
  color,
}) => {
  return (
    <div className="admin-card">
      <div
        className="admin-card-icon"
        style={{ backgroundColor: color }}
      >
        <Icon size={28} />
      </div>

      <div className="admin-card-content">
        <h2>{count}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default AdminCard;