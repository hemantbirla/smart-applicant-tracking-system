import AdminCard from "./AdminCard";

import { adminStatistics } from "../../constants/adminDashboardData";

const AdminStatistics = () => {
  return (
    <section className="admin-statistics">
      {adminStatistics.map((item) => (
        <AdminCard
          key={item.id}
          title={item.title}
          count={item.count}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </section>
  );
};

export default AdminStatistics;