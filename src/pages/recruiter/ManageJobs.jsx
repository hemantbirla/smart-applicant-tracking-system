import { useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import JobFilters from "../../components/jobs/JobFilters";
import JobTable from "../../components/jobs/JobTable";
import DeleteJobModal from "../../components/jobs/DeleteJobModal";

import useJobs from "../../hooks/useJobs";

import "../../styles/jobs.css";

const ManageJobs = () => {
  const {
    jobs,
    loading,
    error,
    deleteJob,
    refetch,
  } = useJobs();

  const [selectedJob, setSelectedJob] = useState(null);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteJob(selectedJob.id);

      toast.success("Job deleted successfully.");

      setShowDeleteModal(false);

      setSelectedJob(null);

      refetch();
    } catch {
      toast.error("Unable to delete job.");
    }
  };

  return (
    <DashboardLayout>
      <div className="jobs-page">

        <div className="jobs-header">
          <h1>Manage Jobs</h1>
        </div>

        <JobFilters />

        <JobTable
          jobs={jobs}
          loading={loading}
          error={error}
          onDelete={handleDeleteClick}
        />

        <DeleteJobModal
          open={showDeleteModal}
          job={selectedJob}
          onCancel={() => {
            setShowDeleteModal(false);
            setSelectedJob(null);
          }}
          onConfirm={confirmDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default ManageJobs;