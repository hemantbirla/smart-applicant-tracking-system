import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import JobFilters from "../../components/jobs/JobFilters";
import JobTable from "../../components/jobs/JobTable";
import DeleteJobModal from "../../components/jobs/DeleteJobModal";

import useJobs from "../../hooks/useJobs";

import {
  LOCATIONS,
  JOB_TYPES,
  EXPERIENCE_LEVELS,
  JOB_STATUS,
  SORT_OPTIONS,
  DEFAULT_JOB_FILTERS,
} from "../../constants/jobConstants";

const ManageJobs = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState(DEFAULT_JOB_FILTERS);

  const {
    jobs,
    loading,
    deleteJob,
  } = useJobs(filters);

  const [selectedJob, setSelectedJob] = useState(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const handleView = (job) => {
    console.log("View Job", job);

    // Future
    // navigate(`/recruiter/jobs/${job.id}`);
  };

  const handleEdit = (job) => {
    navigate(`/recruiter/jobs/edit/${job.id}`);
  };

  const handleDeleteClick = (job) => {
    setSelectedJob(job);

    setIsDeleteOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedJob) return;

    await deleteJob(selectedJob.id);

    setSelectedJob(null);

    setIsDeleteOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="page-container">
        <div className="page-header">
          <h1>Manage Jobs</h1>

          <button
            className="primary-btn"
            onClick={() =>
              navigate("/recruiter/jobs/add")
            }
          >
            + Add Job
          </button>
        </div>

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
          onClose={() => {
            setIsDeleteOpen(false);
            setSelectedJob(null);
          }}
          onConfirm={confirmDelete}
          job={selectedJob}
        />
      </div>
    </DashboardLayout>
  );
};

export default ManageJobs;