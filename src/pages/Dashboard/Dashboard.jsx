import DashboardLayout from "../../layouts/DashboardLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatisticsSection from "../../components/dashboard/StatisticsSection";
import RecentApplications from "../../components/dashboard/RecentApplications";
import ProfileSummary from "../../components/profile/ProfileSummary";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeader
        headerData={{
          greeting: "Welcome Back 👋",
          name: "John Smith",
          role: "Candidate Portal",
          description:
            "Track applications, discover opportunities and grow your career.",
          logo: "JS",
        }}
      />
      <StatisticsSection />
      <RecentApplications />
      <ProfileSummary />
    </DashboardLayout>
  );
};

export default Dashboard;
