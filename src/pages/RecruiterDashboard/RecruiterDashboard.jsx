import RecruiterLayout from "../../layouts/RecruiterLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import RecruiterStats from "../../components/dashboard/recruiter/RecruiterStats";
import RecentJobs from "../../components/dashboard/recruiter/RecentJobs";
import RecentCandidates from "../../components/dashboard/recruiter/RecentCandidates";

import { recruiterHeader } from "../../constants/recruiterDashboardData";
import QuickActions from "../../components/Dashboard/recruiter/QuickActions";
import CompanySummary from "../../components/Dashboard/recruiter/CompanySummary";

const RecruiterDashboard = () => {
  return (
    <RecruiterLayout>
      <DashboardHeader
        title={recruiterHeader.title}
        greeting={recruiterHeader.greeting}
        name={recruiterHeader.name}
        subtitle={recruiterHeader.subtitle}
      />

      <RecruiterStats />

      <RecentJobs />

      <RecentCandidates />
      <QuickActions />
      <CompanySummary />
    </RecruiterLayout>
  );
};

export default RecruiterDashboard;