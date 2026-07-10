import { useEffect, useState, useCallback, useMemo } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import AdminHeader from "../../components/admin/AdminHeader";
import AdminStatistics from "../../components/admin/AdminStatistics";

import AnalyticsSection from "../../components/analytics/AnalyticsSection";

import UserSummary from "../../components/admin/UserSummary";
import RecruiterSummary from "../../components/admin/RecruiterSummary";
import JobSummary from "../../components/admin/JobSummary";
import ApplicationSummary from "../../components/admin/ApplicationSummary";
import RecentActivities from "../../components/admin/RecentActivities";
import TopCompanies from "../../components/admin/TopCompanies";
import SystemStatus from "../../components/admin/SystemStatus";
import QuickActions from "../../components/admin/QuickActions";

import SkeletonCard from "../../components/common/Skeleton/SkeletonCard";
import ErrorFallback from "../../components/common/Error/ErrorFallback";

import useLoading from "../../hooks/useLoading";

import { recruiterSummary } from "../../constants/adminDashboardData";

import "../../styles/adminDashboard.css";
import "../../styles/analytics.css";

const AdminDashboard = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const [error, setError] = useState(false);

  const loadDashboard = useCallback(async () => {
    try {
      setError(false);

      startLoading();

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // const data = await getAdminDashboard();
    } catch (err) {
      console.error(err);

      setError(true);
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const dashboardContent = useMemo(() => {
    return (
      <div className="admin-dashboard">
        <AdminHeader />

        <AdminStatistics />

        <AnalyticsSection />

        <div className="admin-two-column">
          <UserSummary />
          <RecruiterSummary data={recruiterSummary} />
        </div>

        <div className="admin-two-column">
          <JobSummary />
          <ApplicationSummary />
        </div>

        <div className="admin-two-column">
          <RecentActivities />
          <TopCompanies />
        </div>

        <SystemStatus />

        <QuickActions />
      </div>
    );
  }, []);

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
          title="Unable to load Admin Dashboard"
          message="Please try again in a few moments."
          onRetry={loadDashboard}
        />
      </DashboardLayout>
    );
  }

  return <DashboardLayout>{dashboardContent}</DashboardLayout>;
};

export default AdminDashboard;
