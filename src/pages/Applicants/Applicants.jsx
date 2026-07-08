import { useMemo, useState, useEffect } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import ApplicantSearch from "../../components/applicants/ApplicantSearch";
import ApplicantFilters from "../../components/applicants/ApplicantFilters";
import ApplicantTable from "../../components/applicants/ApplicantTable";
import ApplicantDetailsModal from "../../components/applicants/ApplicantDetailsModal";
import UpdateStatusModal from "../../components/applicants/UpdateStatusModal";

import Pagination from "../../components/jobs/Pagination";

import usePagination from "../../hooks/usePagination";

import { applicantData } from "../../constants/applicantData";

import "../../styles/applicants.css";
import ResumeViewer from "../../components/applicants/ResumeViewer";

const Applicants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  const [applicants, setApplicants] = useState(applicantData);

  // ==========================
  // Search + Filter + Sort
  // ==========================

  const filteredApplicants = useMemo(() => {
    let data = [...applicants];

    // Search
    if (searchTerm.trim()) {
      const keyword = searchTerm.toLowerCase();

      data = data.filter(
        (applicant) =>
          `${applicant.firstName} ${applicant.lastName}`
            .toLowerCase()
            .includes(keyword) ||
          applicant.email.toLowerCase().includes(keyword) ||
          applicant.skills.some((skill) =>
            skill.toLowerCase().includes(keyword),
          ),
      );
    }

    // Status Filter
    if (statusFilter) {
      data = data.filter((applicant) => applicant.status === statusFilter);
    }

    // Sorting
    switch (sortBy) {
      case "name":
        data.sort((a, b) =>
          `${a.firstName} ${a.lastName}`.localeCompare(
            `${b.firstName} ${b.lastName}`,
          ),
        );
        break;

      case "experience":
        data.sort((a, b) => b.experience - a.experience);
        break;

      case "oldest":
        data.reverse();
        break;

      default:
        break;
    }

    return data;
  }, [searchTerm, statusFilter, sortBy]);

  // ==========================
  // Pagination
  // ==========================

  const { currentItems, currentPage, totalPages, goToPage, resetPagination } =
    usePagination(filteredApplicants);

  // Reset page whenever filters change
  useEffect(() => {
    resetPagination();
  }, [searchTerm, statusFilter, sortBy]);

  // ==========================
  // Actions
  // ==========================

  const handleViewApplicant = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeApplicant, setResumeApplicant] = useState(null);

  const handleResume = (applicant) => {
    setResumeApplicant(applicant);
    setResumeOpen(true);
  };

  const handleSchedule = (applicant) => {
    alert(`Interview scheduled for ${applicant.firstName}`);
  };

  const handleStatus = (applicant) => {
    setSelectedApplicant(applicant);
    setIsStatusModalOpen(true);
  };

  const handleSaveStatus = (newStatus) => {
    setApplicants((prev) =>
      prev.map((item) =>
        item.id === selectedApplicant.id
          ? {
              ...item,
              status: newStatus,
            }
          : item,
      ),
    );

    setIsStatusModalOpen(false);

    setSelectedApplicant(null);
  };

  const handleReject = (applicant) => {
    alert(`${applicant.firstName} rejected.`);
  };

  return (
    <DashboardLayout>
      <div className="applicants-page">
        {/* Header */}

        <div className="page-header">
          <h1>Applicant Management</h1>

          <p>Manage all candidates who have applied for this position.</p>
        </div>

        {/* Toolbar */}

        <div className="applicant-toolbar">
          <ApplicantSearch value={searchTerm} onChange={setSearchTerm} />

          <ApplicantFilters
            status={statusFilter}
            sortBy={sortBy}
            onStatusChange={setStatusFilter}
            onSortChange={setSortBy}
          />
        </div>

        {/* Table */}

        <ApplicantTable
          //   applicants={currentItems}
          applicants={filteredApplicants}
          onViewApplicant={handleViewApplicant}
          onViewResume={handleResume}
          onSchedule={handleSchedule}
          onStatus={handleStatus}
          onReject={handleReject}
        />

        {/* Pagination */}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}

        {/* Details Modal */}

        <ApplicantDetailsModal
          applicant={selectedApplicant}
          isOpen={!!selectedApplicant}
          onClose={() => setSelectedApplicant(null)}
        />
        <UpdateStatusModal
          isOpen={isStatusModalOpen}
          applicant={selectedApplicant}
          onClose={() => {
            setIsStatusModalOpen(false);
            setSelectedApplicant(null);
          }}
          onSave={handleSaveStatus}
        />
        <ResumeViewer
          isOpen={resumeOpen}
          applicantName={
            resumeApplicant
              ? `${resumeApplicant.firstName} ${resumeApplicant.lastName}`
              : ""
          }
          resumeUrl={resumeApplicant?.resumeUrl}
          onClose={() => {
            setResumeOpen(false);
            setResumeApplicant(null);
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default Applicants;
