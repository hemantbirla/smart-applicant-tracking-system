import RecruiterLayout from "../../layouts/RecruiterLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import RecruiterStats from "../../components/dashboard/recruiter/RecruiterStats";
import RecentJobs from "../../components/dashboard/recruiter/RecentJobs";
import RecentCandidates from "../../components/dashboard/recruiter/RecentCandidates";

import { recruiterHeader } from "../../constants/recruiterDashboardData";
import QuickActions from "../../components/Dashboard/recruiter/QuickActions";

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
    </RecruiterLayout>
  );
};

export default RecruiterDashboard;