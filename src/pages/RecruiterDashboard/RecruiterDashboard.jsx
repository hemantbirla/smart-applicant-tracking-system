import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import RecruiterStats from "../../components/dashboard/recruiter/RecruiterStats";
import RecentJobs from "../../components/dashboard/recruiter/RecentJobs";
import RecentCandidates from "../../components/dashboard/recruiter/RecentCandidates";
import QuickActions from "../../components/dashboard/recruiter/QuickActions";
import CompanySummary from "../../components/dashboard/recruiter/CompanySummary";

import SkeletonCard from "../../components/common/Skeleton/SkeletonCard";
import ErrorFallback from "../../components/common/Error/ErrorFallback";

import useLoading from "../../hooks/useLoading";

import { recruiterHeader } from "../../constants/recruiterDashboardData";

import "../../styles/recruiter-dashboard.css";

const RecruiterDashboard = () => {
  const {
    loading,
    startLoading,
    stopLoading,
  } = useLoading();

  const [error, setError] = useState(false);

  const fetchDashboard = async () => {
    try {
      startLoading();

      setError(false);

      // ===========================
      // Simulate API Call
      // Replace with actual API later
      // ===========================
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      // Uncomment to test Error UI
      // throw new Error("Dashboard failed to load");
    } catch (err) {
      console.error(err);

      setError(true);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    fetchDashboard();
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
          title="Unable to load Recruiter Dashboard"
          message="Something went wrong while loading the dashboard. Please try again."
          onRetry={fetchDashboard}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="recruiter-dashboard">
        <DashboardHeader
          greeting={recruiterHeader.greeting}
          name={recruiterHeader.name}
          role={recruiterHeader.role}
          description={recruiterHeader.description}
          logo={recruiterHeader.logo}
        />

        <RecruiterStats />

        <div className="recruiter-content">
          <div className="recruiter-left">
            <RecentJobs />
            <RecentCandidates />
          </div>

          <div className="recruiter-right">
            <QuickActions />
            <CompanySummary />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecruiterDashboard;