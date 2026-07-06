import DashboardLayout from "../../layouts/DashboardLayout";

const ApplicationHistory = () => {
  return (
    <DashboardLayout>
      <div className="application-page">
        <div className="page-header">
          <h1>Application History</h1>
          <p>Track all your job applications.</p>
        </div>

        <div className="empty-state">
          <h3>No Applications Yet</h3>
          <p>
            Your application history will appear here after
            you apply for jobs.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplicationHistory;