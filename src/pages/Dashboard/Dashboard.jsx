import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatisticsSection from "../../components/dashboard/StatisticsSection";
import RecentApplications from "../../components/dashboard/RecentApplications";
import ProfileSummary from "../../components/profile/ProfileSummary";

import "../../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <DashboardHeader />

        <StatisticsSection />

        <RecentApplications />

        <ProfileSummary />
      </div>
    </div>
  );
};

export default Dashboard;
