import { useMemo, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import ApplicantSearch from "../../components/applicants/ApplicantSearch";
import ApplicantFilters from "../../components/applicants/ApplicantFilters";
import ApplicantTable from "../../components/applicants/ApplicantTable";
import ApplicantDetailsModal from "../../components/applicants/ApplicantDetailsModal";

import { applicantData } from "../../constants/applicantData";

import "../../styles/applicants.css";

const Applicants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const filteredApplicants = useMemo(() => {
    let data = [...applicantData];

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

    if (statusFilter) {
      data = data.filter((a) => a.status === statusFilter);
    }

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

  return (
    <DashboardLayout>
      <div className="applicants-page">

        <div className="page-header">
          <h1>Applicant Management</h1>
          <p>
            Manage all candidates who have applied for this position.
          </p>
        </div>

        <div className="applicant-toolbar">
          <ApplicantSearch
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <ApplicantFilters
            status={statusFilter}
            sortBy={sortBy}
            onStatusChange={setStatusFilter}
            onSortChange={setSortBy}
          />
        </div>

        <ApplicantTable
          applicants={filteredApplicants}
          onView={setSelectedApplicant}
        />

        <ApplicantDetailsModal
          applicant={selectedApplicant}
          isOpen={!!selectedApplicant}
          onClose={() => setSelectedApplicant(null)}
        />

      </div>
    </DashboardLayout>
  );
};

export default Applicants;