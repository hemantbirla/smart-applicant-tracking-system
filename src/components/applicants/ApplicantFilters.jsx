import { APPLICANT_STATUS } from "../../constants/applicantStatus";

const ApplicantFilters = ({
  status,
  sortBy,
  onStatusChange,
  onSortChange,
}) => {
  return (
    <div className="applicant-filters">
      {/* Status Filter */}
      <div className="filter-group">
        <label htmlFor="statusFilter">Status</label>

        <select
          id="statusFilter"
          value={status}
          onChange={(e) =>
            onStatusChange(e.target.value)
          }
        >
          <option value="">All Status</option>

          {APPLICANT_STATUS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div className="filter-group">
        <label htmlFor="sortFilter">Sort By</label>

        <select
          id="sortFilter"
          value={sortBy}
          onChange={(e) =>
            onSortChange(e.target.value)
          }
        >
          <option value="latest">
            Latest Applied
          </option>

          <option value="oldest">
            Oldest Applied
          </option>

          <option value="experience">
            Experience
          </option>

          <option value="name">
            Candidate Name
          </option>
        </select>
      </div>
    </div>
  );
};

export default ApplicantFilters;