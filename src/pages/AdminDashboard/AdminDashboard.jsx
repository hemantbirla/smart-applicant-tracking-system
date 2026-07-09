import DashboardLayout from "../../layouts/DashboardLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatistics from "../../components/admin/AdminStatistics";

import "../../styles/adminDashboard.css";
import UserSummary from "../../components/admin/UserSummary";
import RecruiterSummary from "../../components/admin/RecruiterSummary";
import { recruiterSummary } from "../../constants/adminDashboardData";
import JobSummary from "../../components/admin/JobSummary";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="admin-dashboard">
        <AdminHeader />
        <AdminStatistics />
        <UserSummary />
        <RecruiterSummary data={recruiterSummary} />
        <JobSummary />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;