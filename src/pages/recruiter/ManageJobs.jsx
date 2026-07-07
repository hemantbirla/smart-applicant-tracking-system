import { useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import JobFilters from "../../components/jobs/JobFilters";
import JobTable from "../../components/jobs/JobTable";
import DeleteJobModal from "../../components/jobs/DeleteJobModal";

import useJobs from "../../hooks/useJobs";

const ManageJobs = () => {
  const {
    jobs,
    loading,
    error,
    fetchJobs,
    deleteJob,
  } = useJobs();

  const [selectedJob, setSelectedJob] =
    useState(null);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [deleting, setDeleting] =
    useState(false);

  // Search & Filters (UI only for now)
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    experience: "",
    status: "",
    sort: "",
  });

  const openDeleteModal = (job) => {
    setSelectedJob(job);
    setDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedJob(null);
    setDeleteOpen(false);
  };

  const handleDelete = async () => {
    if (!selectedJob) return;

    try {
      setDeleting(true);

      await deleteJob(selectedJob.id);

      toast.success("Job deleted successfully.");

      closeDeleteModal();

      fetchJobs();
    } catch (error) {
      toast.error(
        error?.message ||
          "Failed to delete job."
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="manage-jobs-page">
        <div className="page-header">
          <h1>Manage Jobs</h1>
        </div>

        <JobFilters
          filters={filters}
          setFilters={setFilters}
        />

        {loading && (
          <div className="jobs-loading">
            Loading jobs...
          </div>
        )}

        {error && (
          <div className="jobs-error">
            {error}
          </div>
        )}

        {!loading &&
          !error &&
          jobs.length === 0 && (
            <div className="jobs-empty">
              No jobs found.
            </div>
          )}

        {!loading &&
          !error &&
          jobs.length > 0 && (
            <JobTable
              jobs={jobs}
              onDelete={openDeleteModal}
            />
          )}

        <DeleteJobModal
          isOpen={deleteOpen}
          jobTitle={selectedJob?.title}
          loading={deleting}
          onClose={closeDeleteModal}
          onConfirm={handleDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default ManageJobs;