import { useMemo, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import InterviewSearch from "../../components/interviews/InterviewSearch";
import InterviewFilters from "../../components/interviews/InterviewFilters";
import InterviewForm from "../../components/interviews/InterviewForm";
import InterviewCalendar from "../../components/interviews/InterviewCalendar";
import InterviewList from "../../components/interviews/InterviewList";
import InterviewDetailsModal from "../../components/interviews/InterviewDetailsModal";

import useInterviews from "../../hooks/useInterviews";

import "../../styles/interview.css";

const Interviews = () => {
  const { interviews, addInterview, editInterview, cancel } = useInterviews();

  const [selectedInterview, setSelectedInterview] = useState(null);

  const [editingInterview, setEditingInterview] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [search, setSearch] = useState("");

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
const filteredInterviews = useMemo(() => {
  return interviews.filter((item) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      searchText === "" ||
      item.candidate?.toLowerCase().includes(searchText) ||
      item.job?.toLowerCase().includes(searchText) ||
      item.interviewer?.toLowerCase().includes(searchText);

    const matchesStatus =
      filters.status === "" ||
      item.status === filters.status;

    const matchesType =
      filters.type === "" ||
      item.type === filters.type;

    const matchesInterviewer =
      filters.interviewer.trim() === "" ||
      item.interviewer
        ?.toLowerCase()
        .includes(filters.interviewer.toLowerCase());

    const itemDate =
      item.date instanceof Date
        ? item.date.toISOString().split("T")[0]
        : item.date;

    const matchesDate =
      filters.date === "" ||
      itemDate === filters.date;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesType &&
      matchesInterviewer &&
      matchesDate
    );
  });
}, [interviews, search, filters]);
  

  const handleView = (interview) => {
    setSelectedInterview(interview);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedInterview(null);
    setEditingInterview(null);
    setIsModalOpen(false);
  };

  const handleEdit = (interview) => {
    setEditingInterview(interview);
    setSelectedInterview(null);
    setIsModalOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancel = async (id) => {
    await cancel(id);
  };

  const handleSubmit = async (data) => {
    // console.log("Form Submitted");
    // console.log(data);

    if (editingInterview) {
      await editInterview(editingInterview.id, data);
      setEditingInterview(null);
    } else {
      await addInterview(data);
    }

    // Ensure form switches back to "Schedule" mode
    setEditingInterview(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <DashboardLayout>
      <div className="page-container">
        <h1 className="page-title">Interview Scheduling</h1>

        {/* Schedule / Edit Interview */}

        <InterviewForm
          initialData={editingInterview}
          onSubmit={handleSubmit}
          onCancel={() => setEditingInterview(null)}
        />

        {/* Calendar Placeholder */}

        <InterviewCalendar />

        {/* Search */}

        <InterviewSearch search={search} onSearch={setSearch} />

        {/* Filters */}

        <InterviewFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        {/* Interview List */}

        <InterviewList
  interviews={filteredInterviews}
  onView={handleView}
  onEdit={handleEdit}
  onCancel={handleCancel}
/>

        {/* Details Modal */}

        <InterviewDetailsModal
          isOpen={isModalOpen}
          interview={selectedInterview}
          onClose={handleClose}
          onEdit={handleEdit}
          onCancel={handleCancel}
        />
      </div>
    </DashboardLayout>
  );
};

export default Interviews;
