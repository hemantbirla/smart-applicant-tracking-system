import RecruiterLayout from "../../layouts/RecruiterLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import RecruiterStats from "../../components/dashboard/recruiter/RecruiterStats";
import RecentJobs from "../../components/dashboard/recruiter/RecentJobs";
import RecentCandidates from "../../components/dashboard/recruiter/RecentCandidates";
import QuickActions from "../../components/dashboard/recruiter/QuickActions";
import CompanySummary from "../../components/dashboard/recruiter/CompanySummary";

import "../../styles/recruiter-dashboard.css";
import { recruiterHeader } from "../../constants/recruiterDashboardData";

const RecruiterDashboard = () => {
  return (
    <RecruiterLayout>
      <div className="recruiter-dashboard">
        <DashboardHeader
          greeting={recruiterHeader.greeting}
          name={recruiterHeader.name}
          role={recruiterHeader.role}
          description = {recruiterHeader.description}
          logo = {recruiterHeader.logo}
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
    </RecruiterLayout>
  );
};

export default RecruiterDashboard;