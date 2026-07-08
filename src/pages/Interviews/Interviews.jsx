import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import InterviewSearch from "../../components/interviews/InterviewSearch";
import InterviewFilters from "../../components/interviews/InterviewFilters";
import InterviewList from "../../components/interviews/InterviewList";
import InterviewDetailsModal from "../../components/interviews/InterviewDetailsModal";

import useInterviews from "../../hooks/useInterviews";

const Interviews = () => {
  const { interviews } = useInterviews();

  const [selectedInterview, setSelectedInterview] =
    useState(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [filters, setFilters] = useState({
    status: "",
    type: "",
    interviewer: "",
    date: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleView = (interview) => {
    setSelectedInterview(interview);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedInterview(null);
    setIsModalOpen(false);
  };

  const handleEdit = (interview) => {
    console.log("Edit Interview:", interview);

    // Part 6
    // Open InterviewForm in edit mode
  };

  const handleCancel = (id) => {
    console.log("Cancel Interview:", id);

    // Part 6
    // Update interview status to Cancelled
  };

  return (
    <DashboardLayout>
      <div className="page-container">
        <h1 className="page-title">
          Interview Scheduling
        </h1>

        <InterviewSearch />

        <InterviewFilters
          filters={filters}
          onChange={handleFilterChange}
        />

        <InterviewList
          interviews={interviews}
          onView={handleView}
          onEdit={handleEdit}
          onCancel={handleCancel}
        />

        <InterviewDetailsModal
          isOpen={isModalOpen}
          interview={selectedInterview}
          onClose={handleCloseModal}
          onEdit={handleEdit}
          onCancel={handleCancel}
        />
      </div>
    </DashboardLayout>
  );
};

export default Interviews;