import { useMemo, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import ApplicantSearch from "../../components/applicants/ApplicantSearch";
import ApplicantFilters from "../../components/applicants/ApplicantFilters";
import ApplicantTable from "../../components/applicants/ApplicantTable";

import { applicantData } from "../../constants/applicantData";

import "../../styles/applicants.css";

const Applicants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredApplicants = useMemo(() => {
    let data = [...applicantData];

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
    if (statusFilter !== "All") {
      data = data.filter((applicant) => applicant.status === statusFilter);
    }

    // Sorting
    switch (sortBy) {
      case "Name":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "Experience":
        data.sort((a, b) => b.experience - a.experience);
        break;

      case "Oldest":
        data.reverse();
        break;

      default:
        // Newest
        break;
    }

    return data;
  }, [searchTerm, statusFilter, sortBy]);

  return (
    <DashboardLayout>
      <div className="applicants-page">
        <div className="page-header">
          <h1>Applicant Management</h1>

          <p>Manage all candidates who have applied for this position.</p>
        </div>

        <div className="applicant-toolbar">
          <ApplicantSearch
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <ApplicantFilters
            status={statusFilter}
            sortBy={sortBy}
            onStatusChange={(e) => setStatusFilter(e.target.value)}
            onSortChange={(e) => setSortBy(e.target.value)}
          />
        </div>

        <ApplicantTable applicants={filteredApplicants} />
      </div>
    </DashboardLayout>
  );
};

export default Applicants;
