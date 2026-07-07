import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import JobFilters from "../../components/jobs/JobFilters";
import JobTable from "../../components/jobs/JobTable";
import DeleteJobModal from "../../components/jobs/DeleteJobModal";
import useJobs from "../../hooks/useJobs";

// Import your newly structured constants
import {
  LOCATIONS,
  JOB_TYPES,
  EXPERIENCE_LEVELS,
  JOB_STATUS,
  SORT_OPTIONS,
  DEFAULT_JOB_FILTERS
} from "../../constants/jobConstants";

const ManageJobs = () => {
  // Use the exact filter configuration from your file
  const [filters, setFilters] = useState(DEFAULT_JOB_FILTERS);

  const { jobs, loading, deleteJob } = useJobs(filters);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleView = (job) => console.log("View Job", job);
  const handleEdit = (job) => console.log("Edit Job", job);

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setIsDeleteOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedJob) return;
    await deleteJob(selectedJob.id);
    setIsDeleteOpen(false);
    setSelectedJob(null);
  };

  return (
    <DashboardLayout>
      <div className="page-container">
        
        <div className="page-header">
          <h1>Manage Jobs</h1>
          <button className="primary-btn" onClick={() => console.log("Navigate to Add Job")}>
            + Add Job
          </button>
        </div>

        {/* Pass down the exact keys expected by your new configuration */}
        <JobFilters
          filters={filters}
          setFilters={setFilters}
          locations={LOCATIONS}
          jobTypes={JOB_TYPES}
          experienceLevels={EXPERIENCE_LEVELS}
          statuses={JOB_STATUS}
          sortOptions={SORT_OPTIONS}
        />

        <JobTable
          jobs={jobs}
          loading={loading}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
        />

        <DeleteJobModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={confirmDelete}
          job={selectedJob}
        />

      </div>
    </DashboardLayout>
  );
};

export default ManageJobs;