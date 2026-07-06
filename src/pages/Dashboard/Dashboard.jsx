import DashboardLayout from "../../layouts/DashboardLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatisticsSection from "../../components/dashboard/StatisticsSection";
import RecentApplications from "../../components/dashboard/RecentApplications";
import ProfileSummary from "../../components/profile/ProfileSummary";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeader
        title="Candidate Dashboard"
        greeting="Good Morning,"
        name="Hemant 👋"
        subtitle="Welcome Back"
      />
      <StatisticsSection />
      <RecentApplications />
      <ProfileSummary />
    </DashboardLayout>
  );
};

export default Dashboard;
