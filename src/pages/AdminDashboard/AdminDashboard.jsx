import DashboardLayout from "../../layouts/DashboardLayout";

import AdminHeader from "../../components/admin/AdminHeader";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container py-4">
        <AdminHeader />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;