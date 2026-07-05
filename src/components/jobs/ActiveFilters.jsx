import React from "react";
import "../../styles/jobs.css";

const ActiveFilters = ({ activeFilters, onRemoveFilter, clearAll }) => {
  const hasFilters =
    activeFilters &&
    Object.values(activeFilters).some((val) =>
      Array.isArray(val) ? val.length > 0 : val
    );

  if (!hasFilters) return null;

  return (
    <div className="active-filters">
      <div className="active-filters-header">
        <h4>Active Filters</h4>

        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <div className="chips-container">
        {/* Search Term */}
        {activeFilters.searchTerm && (
          <span className="chip">
            {activeFilters.searchTerm}
            <button
              onClick={() => onRemoveFilter("searchTerm")}
            >
              ✕
            </button>
          </span>
        )}

        {/* Location */}
        {activeFilters.location?.map((loc) => (
          <span className="chip" key={loc}>
            {loc}
            <button
              onClick={() => onRemoveFilter("location", loc)}
            >
              ✕
            </button>
          </span>
        ))}

        {/* Job Type */}
        {activeFilters.jobType?.map((type) => (
          <span className="chip" key={type}>
            {type}
            <button
              onClick={() => onRemoveFilter("jobType", type)}
            >
              ✕
            </button>
          </span>
        ))}

        {/* Experience */}
        {activeFilters.experience?.map((exp) => (
          <span className="chip" key={exp}>
            {exp}
            <button
              onClick={() => onRemoveFilter("experience", exp)}
            >
              ✕
            </button>
          </span>
        ))}

        {/* Salary */}
        {activeFilters.salary?.map((sal) => (
          <span className="chip" key={sal}>
            {sal}
            <button
              onClick={() => onRemoveFilter("salary", sal)}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;