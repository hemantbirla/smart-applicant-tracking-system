import { SORT_OPTIONS } from "../../constants/jobFilters";

const SortDropdown = ({ value, onChange }) => {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select" className="sort-label">
        Sort By
      </label>

      <select
        id="sort-select"
        className="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;