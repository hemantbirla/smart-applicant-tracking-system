import { useEffect, useState, useCallback, useMemo } from "react";

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
  const { loading, startLoading, stopLoading } = useLoading();

  const [error, setError] = useState(false);

  const fetchDashboard = useCallback(async () => {
    try {
      startLoading();

      setError(false);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // const data = await getRecruiterDashboard();
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

  const recruiterContent = useMemo(() => {
    return (
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
          title="Unable to load Recruiter Dashboard"
          message="Something went wrong while loading the dashboard. Please try again."
          onRetry={fetchDashboard}
        />
      </DashboardLayout>
    );
  }

  return <DashboardLayout>{recruiterContent}</DashboardLayout>;
};

export default RecruiterDashboard;
