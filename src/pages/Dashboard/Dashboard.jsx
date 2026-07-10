import DashboardLayout from "../../layouts/DashboardLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatisticsSection from "../../components/dashboard/StatisticsSection";
import RecentApplications from "../../components/dashboard/RecentApplications";
import ProfileSummary from "../../components/profile/ProfileSummary";
import SkeletonCard from "../../components/common/Skeleton/SkeletonCard";
import useLoading from "../../hooks/useLoading";

const Dashboard = () => {
  const { loading } = useLoading();

  if (loading) {
    return (
      <DashboardLayout>
        <SkeletonCard />
      </DashboardLayout>
    );
  }

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
