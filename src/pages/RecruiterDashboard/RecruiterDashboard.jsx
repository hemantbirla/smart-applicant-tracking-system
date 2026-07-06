import RecruiterLayout from "../../layouts/RecruiterLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";

import { recruiterHeader } from "../../constants/recruiterDashboardData";
import RecruiterStats from "../../components/Dashboard/recruiter/RecruiterStats";

const RecruiterDashboard = () => {
  return (
    <RecruiterLayout>
     <DashboardHeader
        title={recruiterHeader?.title || "Recruiter Dashboard"}
        greeting={recruiterHeader?.greeting || "Hello,"}
        name={recruiterHeader?.name || "Recruiter"}
        subtitle={recruiterHeader?.subtitle || "Welcome to your panel"}
      />
      <RecruiterStats />
    </RecruiterLayout>
  );
};

export default RecruiterDashboard;
