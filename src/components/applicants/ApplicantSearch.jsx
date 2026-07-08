import { FiSearch } from "react-icons/fi";

const ApplicantSearch = ({
  value,
  onChange,
  placeholder = "Search by name, email or skills...",
}) => {
  return (
    <div className="applicant-search">
      <FiSearch className="applicant-search-icon" />

      <input
        type="text"
        className="applicant-search-input"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default ApplicantSearch;