import DashboardLayout from "../../layouts/DashboardLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatistics from "../../components/admin/AdminStatistics";

import "../../styles/adminDashboard.css";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="admin-dashboard">
        <AdminHeader />

        <AdminStatistics />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;