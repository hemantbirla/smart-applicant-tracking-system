import {
  JOB_STATUS,
  JOB_TYPES,
  EXPERIENCE_LEVELS,
  LOCATIONS,
  SORT_OPTIONS,
} from "../../constants/jobConstants";

const JobFilters = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className="job-filters">

      <input
        type="text"
        placeholder="Search jobs..."
        value={filters.search}
        onChange={(e) =>
          onFilterChange("search", e.target.value)
        }
        className="filter-input"
      />

      <select
        value={filters.location}
        onChange={(e) =>
          onFilterChange("location", e.target.value)
        }
        className="filter-select"
      >
        {LOCATIONS.map((location) => (
          <option
            key={location}
            value={location}
          >
            {location}
          </option>
        ))}
      </select>

      <select
        value={filters.jobType}
        onChange={(e) =>
          onFilterChange("jobType", e.target.value)
        }
        className="filter-select"
      >
        {JOB_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        value={filters.status}
        onChange={(e) =>
          onFilterChange("status", e.target.value)
        }
        className="filter-select"
      >
        {JOB_STATUS.map((status) => (
          <option
            key={status}
            value={status}
          >
            {status}
          </option>
        ))}
      </select>

      <select
        value={filters.experience}
        onChange={(e) =>
          onFilterChange(
            "experience",
            e.target.value
          )
        }
        className="filter-select"
      >
        {EXPERIENCE_LEVELS.map((level) => (
          <option
            key={level}
            value={level}
          >
            {level}
          </option>
        ))}
      </select>

      <select
        value={filters.sortBy}
        onChange={(e) =>
          onFilterChange("sortBy", e.target.value)
        }
        className="filter-select"
      >
        {SORT_OPTIONS.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

    </div>
  );
};

export default JobFilters;