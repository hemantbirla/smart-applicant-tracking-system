import DashboardLayout from "../../layouts/DashboardLayout";

import SavedJobList from "../../components/jobs/SavedJobsList";
import EmptySavedJobs from "../../components/jobs/EmptyJobs";

import useSavedJobs from "../../hooks/useSavedJobs";

const SavedJobs = () => {
  const { savedJobs } = useSavedJobs();

  return (
    <DashboardLayout>
      <div className="dashboard-page">
        <div className="dashboard-header">
          <h1>Saved Jobs</h1>
          <p>Your bookmarked job opportunities.</p>
        </div>

        {savedJobs.length === 0 ? (
          <EmptySavedJobs />
        ) : (
          <SavedJobList jobs={savedJobs} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default SavedJobs;