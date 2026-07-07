import React from "react";

const JobFilters = ({
  filters,
  setFilters,
  locations,
  jobTypes,
  experienceLevels,
  salaryRanges,
  workModes,
  sortOptions,
}) => {
  // Handles changes across all fields using the element's name attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="job-filters">
      
      {/* Search Input */}
      <input
        type="text"
        name="search"
        className="filter-input"
        placeholder="Search jobs..."
        value={filters?.search || ""}
        onChange={handleChange}
      />

      {/* Location Selector */}
      <select
        name="location"
        className="filter-select"
        value={filters?.location || ""}
        onChange={handleChange}
      >
        <option value="">All Locations</option>
        {locations?.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Job Type Selector */}
      <select
        name="jobType"
        className="filter-select"
        value={filters?.jobType || ""}
        onChange={handleChange}
      >
        <option value="">All Job Types</option>
        {jobTypes?.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Experience Selector */}
      <select
        name="experience"
        className="filter-select"
        value={filters?.experience || ""}
        onChange={handleChange}
      >
        <option value="">All Experience</option>
        {experienceLevels?.map((exp) => (
          <option key={exp.value} value={exp.value}>
            {exp.label}
          </option>
        ))}
      </select>

      {/* Work Mode Selector */}
      <select
        name="workMode"
        className="filter-select"
        value={filters?.workMode || ""}
        onChange={handleChange}
      >
        <option value="">All Work Modes</option>
        {workModes?.map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>

      {/* Salary Selector */}
      <select
        name="salary"
        className="filter-select"
        value={filters?.salary || ""}
        onChange={handleChange}
      >
        <option value="">Any Salary</option>
        {salaryRanges?.map((sal) => (
          <option key={sal.value} value={sal.value}>
            {sal.label}
          </option>
        ))}
      </select>

      {/* Sorting Selector */}
      <select
        name="sortBy"
        className="filter-select"
        value={filters?.sortBy || "newest"}
        onChange={handleChange}
      >
        {sortOptions?.map((sort) => (
          <option key={sort.value} value={sort.value}>
            {sort.label}
          </option>
        ))}
      </select>

    </div>
  );
};

export default JobFilters;