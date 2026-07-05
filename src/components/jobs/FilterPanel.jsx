import {
  LOCATIONS,
  JOB_TYPES,
  EXPERIENCE_LEVELS,
  SALARY_RANGES,
  WORK_MODES,
} from "../../constants/jobFilters";

const FilterPanel = ({ filters, onChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label>Location</label>

        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
        >
          <option value="">All Locations</option>
          {LOCATIONS.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Job Type</label>

        <select
          name="jobType"
          value={filters.jobType}
          onChange={handleChange}
        >
          <option value="">All Job Types</option>

          {JOB_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Experience</label>

        <select
          name="experience"
          value={filters.experience}
          onChange={handleChange}
        >
          <option value="">All Experience</option>

          {EXPERIENCE_LEVELS.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Salary</label>

        <select
          name="salary"
          value={filters.salary}
          onChange={handleChange}
        >
          <option value="">All Salaries</option>

          {SALARY_RANGES.map((salary) => (
            <option key={salary.value} value={salary.value}>
              {salary.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Work Mode</label>

        <select
          name="workMode"
          value={filters.workMode}
          onChange={handleChange}
        >
          <option value="">All Modes</option>

          {WORK_MODES.map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;