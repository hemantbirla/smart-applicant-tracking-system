import DashboardLayout from "../../layouts/DashboardLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatistics from "../../components/admin/AdminStatistics";

import "../../styles/adminDashboard.css";
import UserSummary from "../../components/admin/UserSummary";
import RecruiterSummary from "../../components/admin/RecruiterSummary";
import { recruiterSummary } from "../../constants/adminDashboardData";
import JobSummary from "../../components/admin/JobSummary";
import ApplicationSummary from "../../components/admin/ApplicationSummary";
import RecentActivities from "../../components/admin/RecentActivities";
import TopCompanies from "../../components/admin/TopCompanies";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="admin-dashboard">
        <AdminHeader />
        <AdminStatistics />
        <UserSummary />
        <RecruiterSummary data={recruiterSummary} />
        <div className="admin-two-column">
          <JobSummary />
          <ApplicationSummary />
        </div>
        <div className="admin-grid">
          <RecentActivities />
          <TopCompanies />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
