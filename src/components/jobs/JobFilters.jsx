import React from "react";

const JobFilters = ({
  filters,
  setFilters,
  locations = [],
  jobTypes = [],
  experienceLevels = [],
  salaryRanges = [],
  workModes = [],
  status = [],
  sortOptions = [],
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="job-filters">
      {/* Search */}

      <input
        type="text"
        name="search"
        value={filters.search || ""}
        onChange={handleChange}
        placeholder="Search title, company, skills..."
        className="filter-input"
      />

      {/* Location */}

      <select
        name="location"
        value={filters.location || ""}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">All Locations</option>

        {locations.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Job Type */}

      <select
        name="jobType"
        value={filters.jobType || ""}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">All Job Types</option>

        {jobTypes.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Experience */}

      <select
        name="experience"
        value={filters.experience || ""}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">All Experience</option>

        {experienceLevels.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {/* Status */}

      <select
        name="status"
        value={filters.status || ""}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">All Status</option>

        {status.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Work Mode */}

      <select
        name="workMode"
        value={filters.workMode || ""}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">All Work Modes</option>

        {workModes.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Salary */}

      <select
        name="salary"
        value={filters.salary || ""}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">Any Salary</option>

        {salaryRanges.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {/* Sort */}

      <select
        name="sortBy"
        value={filters.sortBy || ""}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">Sort By</option>

        {sortOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JobFilters;
