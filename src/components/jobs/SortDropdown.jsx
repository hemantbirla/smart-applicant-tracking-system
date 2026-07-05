import { SORT_OPTIONS } from "../../constants/jobFilters";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-dropdown">
      <label>Sort By</label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
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