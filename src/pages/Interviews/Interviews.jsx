import { useState } from "react";

import InterviewSearch from "../../components/interviews/InterviewSearch";
import InterviewFilters from "../../components/interviews/InterviewFilters";
import InterviewStatusBadge from "../../components/interviews/InterviewStatusBadge";

const Interviews = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState({
    status: "",
    type: "",
    date: "",
    interviewer: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Interview Scheduling</h1>

      <InterviewSearch
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <InterviewFilters
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <InterviewStatusBadge status="Scheduled" />
    </div>
  );
};

export default Interviews;