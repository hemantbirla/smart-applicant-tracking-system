import { useEffect } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import ApplicationCard from "../../components/application/ApplicationCard";
import useApplications from "../../hooks/useApplications";

const ApplicationHistory = () => {
  const { applications, withdraw, refreshApplications, loading } =
    useApplications();

  useEffect(() => {
    refreshApplications();
  }, []);

  console.log("ApplicationHistory rendered");
  console.log("Applications:", applications);
  console.log(
    "LocalStorage:",
    JSON.parse(localStorage.getItem("applications")),
  );

  return (
    <DashboardLayout>
      <div className="container py-4">
        <h1>Application History</h1>

        {loading && <p>Loading...</p>}

        {!loading && applications.length === 0 && <p>No applications found.</p>}

        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            onWithdraw={withdraw}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ApplicationHistory;
