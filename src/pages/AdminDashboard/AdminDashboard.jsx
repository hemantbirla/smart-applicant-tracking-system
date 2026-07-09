import DashboardLayout from "../../layouts/DashboardLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatistics from "../../components/admin/AdminStatistics";

import "../../styles/adminDashboard.css";
import UserSummary from "../../components/admin/UserSummary";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="admin-dashboard">
        <AdminHeader />
        <AdminStatistics />
        <UserSummary />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;