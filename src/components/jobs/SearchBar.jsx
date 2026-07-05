import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="job-search">
      <FiSearch className="job-search-icon" />

      <input
        type="text"
        className="job-search-input"
        placeholder="Search by job title, company or skills..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;