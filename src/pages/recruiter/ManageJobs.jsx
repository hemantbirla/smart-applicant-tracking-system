import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import JobFilters from "../../components/jobs/JobFilters";
import JobTable from "../../components/jobs/JobTable";
import DeleteJobModal from "../../components/jobs/DeleteJobModal";
import Pagination from "../../components/jobs/Pagination";

import SkeletonCard from "../../components/common/SkeletonCard";
import EmptyState from "../../components/common/EmptyState";
import ErrorState from "../../components/common/ErrorState";

import useJobs from "../../hooks/useJobs";
import usePagination from "../../hooks/usePagination";

import {
  LOCATIONS,
  JOB_TYPES,
  EXPERIENCE_LEVELS,
  JOB_STATUS,
  SALARY_RANGES,
  WORK_MODES,
  SORT_OPTIONS,
  DEFAULT_JOB_FILTERS,
} from "../../constants/jobConstants";

const ManageJobs = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState(DEFAULT_JOB_FILTERS);

  // Fetch the jobs data array
  const {
    jobs,
    loading,
    error,
    deleteJob,
    fetchJobs,
  } = useJobs(filters);

  // Filter and sort the full dataset locally
  const filteredJobs = jobs
    .filter((job) => {
      // Search
      const search = filters.search.toLowerCase();

      const matchesSearch =
        !search ||
        job.title?.toLowerCase().includes(search) ||
        job.company?.toLowerCase().includes(search) ||
        job.location?.toLowerCase().includes(search) ||
        job.skills?.join(" ").toLowerCase().includes(search);

      // Location
      const matchesLocation =
        !filters.location ||
        filters.location === "All" ||
        job.location === filters.location;

      // Job Type
      const matchesJobType =
        !filters.jobType ||
        filters.jobType === "All" ||
        job.jobType === filters.jobType ||
        job.employmentType === filters.jobType;

      // Experience
      const matchesExperience =
        !filters.experience || job.experience === filters.experience;

      // Status
      const matchesStatus =
        !filters.status ||
        filters.status === "All" ||
        job.status === filters.status;

      // Work Mode
      const matchesWorkMode =
        !filters.workMode || job.workMode === filters.workMode;

      // Salary
      const matchesSalary = !filters.salary || job.salary === filters.salary;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesJobType &&
        matchesExperience &&
        matchesStatus &&
        matchesWorkMode &&
        matchesSalary
      );
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "oldest":
          return new Date(a.postedDate) - new Date(b.postedDate);

        case "title":
          return a.title.localeCompare(b.title);

        case "applicants":
          return (b.applicants || 0) - (a.applicants || 0);

        default:
          return new Date(b.postedDate) - new Date(a.postedDate);
      }
    });

  // Handle local pagination of the final filtered list
  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination(filteredJobs);

  const [selectedJob, setSelectedJob] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  /**
   * View Job
   */
  const handleView = (job) => {
    navigate(`/recruiter/jobs/${job.id}`);
  };

  /**
   * Edit Job
   */
  const handleEdit = (job) => {
    navigate(`/recruiter/jobs/edit/${job.id}`);
  };

  /**
   * Open Delete Modal
   */
  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setIsDeleteOpen(true);
  };

  /**
   * Delete Job
   */
  const confirmDelete = async () => {
    if (!selectedJob) return;

    await deleteJob(selectedJob.id);

    setSelectedJob(null);
    setIsDeleteOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="page-container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Manage Jobs</h1>

          <button
            className="primary-btn"
            onClick={() => navigate("/recruiter/jobs/add")}
          >
            + Add Job
          </button>
        </div>

        {/* Filters */}
        <JobFilters
          filters={filters}
          setFilters={setFilters}
          locations={LOCATIONS}
          jobTypes={JOB_TYPES}
          experienceLevels={EXPERIENCE_LEVELS}
          status={JOB_STATUS}
          salaryRanges={SALARY_RANGES}
          workModes={WORK_MODES}
          sortOptions={SORT_OPTIONS}
        />

        {/* Loading */}
        {loading && <SkeletonCard rows={6} />}

        {/* Error */}
        {!loading && error && (
          <ErrorState
            title="Unable to Load Jobs"
            message={error}
            onRetry={fetchJobs}
          />
        )}

        {/* Empty State */}
        {!loading && !error && filteredJobs.length === 0 && (
          <EmptyState
            title="No Jobs Found"
            message="Create your first job posting to start receiving applications."
          />
        )}

        {/* Job Table & Pagination */}
        {!loading && !error && filteredJobs.length > 0 && (
          <>
            <JobTable
              jobs={currentItems}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </>
        )}

        {/* Delete Confirmation */}
        <DeleteJobModal
          isOpen={isDeleteOpen}
          job={selectedJob}
          onClose={() => {
            setIsDeleteOpen(false);
            setSelectedJob(null);
          }}
          onConfirm={confirmDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default ManageJobs;