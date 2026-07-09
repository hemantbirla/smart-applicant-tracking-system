import DashboardLayout from "../../layouts/DashboardLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatistics from "../../components/admin/AdminStatistics";
import UserSummary from "../../components/admin/UserSummary";
import RecruiterSummary from "../../components/admin/RecruiterSummary";
import JobSummary from "../../components/admin/JobSummary";
import ApplicationSummary from "../../components/admin/ApplicationSummary";
import RecentActivities from "../../components/admin/RecentActivities";
import TopCompanies from "../../components/admin/TopCompanies";
import SystemStatus from "../../components/admin/SystemStatus";
import QuickActions from "../../components/admin/QuickActions";

import { recruiterSummary } from "../../constants/adminDashboardData";

import "../../styles/adminDashboard.css";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="admin-dashboard">
        {/* Header */}
        <AdminHeader />

        {/* Statistics */}
        <AdminStatistics />

        {/* User & Recruiter Summary */}
        <div className="admin-two-column">
          <UserSummary />
          <RecruiterSummary data={recruiterSummary} />
        </div>

        {/* Job & Application Summary */}
        <div className="admin-two-column">
          <JobSummary />
          <ApplicationSummary />
        </div>

        {/* Activities & Companies */}
        <div className="admin-two-column">
          <RecentActivities />
          <TopCompanies />
        </div>

        {/* System Status */}
        <SystemStatus />

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;