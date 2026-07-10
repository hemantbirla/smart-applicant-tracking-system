import { useEffect, useState, useMemo, useCallback } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatisticsSection from "../../components/dashboard/StatisticsSection";
import RecentApplications from "../../components/dashboard/RecentApplications";
import ProfileSummary from "../../components/profile/ProfileSummary";

import SkeletonCard from "../../components/common/Skeleton/SkeletonCard";
import ErrorFallback from "../../components/common/Error/ErrorFallback";

import useLoading from "../../hooks/useLoading";

const Dashboard = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const [error, setError] = useState(false);

  /**
   * Memoized Dashboard Header Data
   */
  const headerData = useMemo(
    () => ({
      greeting: "Welcome Back 👋",
      name: "John Smith",
      role: "Candidate Portal",
      description:
        "Track applications, discover opportunities and grow your career.",
      logo: "JS",
    }),
    [],
  );

  /**
   * Memoized API Call
   */
  const fetchDashboard = useCallback(async () => {
    try {
      startLoading();

      setError(false);

      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Uncomment to test Error UI
      // throw new Error("Dashboard API Failed");
    } catch (err) {
      console.error(err);

      setError(true);
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (loading) {
    return (
      <DashboardLayout>
        <SkeletonCard />
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <ErrorFallback
          title="Unable to load Dashboard"
          message="Something went wrong while loading your dashboard."
          onRetry={fetchDashboard}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <DashboardHeader headerData={headerData} />

      <StatisticsSection />

      <RecentApplications />

      <ProfileSummary />
    </DashboardLayout>
  );
};

export default Dashboard;
