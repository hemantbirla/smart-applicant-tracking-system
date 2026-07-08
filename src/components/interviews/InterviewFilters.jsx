import {
  STATUS_OPTIONS,
} from "../../constants/interviewStatus";

import {
  INTERVIEW_TYPES,
} from "../../constants/interviewTypes";

import "../../styles/interview.css";

const InterviewFilters = ({
  filters = {},
  onFilterChange = () => {},
}) => {
  return (
    <div className="interview-filters">

      <select
        value={filters.status}
        onChange={(e) =>
          onFilterChange(
            "status",
            e.target.value
          )
        }
      >
        <option value="">
          All Status
        </option>

        {STATUS_OPTIONS.map((status) => (
          <option
            key={status}
            value={status}
          >
            {status}
          </option>
        ))}
      </select>

      <select
        value={filters.type}
        onChange={(e) =>
          onFilterChange(
            "type",
            e.target.value
          )
        }
      >
        <option value="">
          All Types
        </option>

        {INTERVIEW_TYPES.map((type) => (
          <option
            key={type}
            value={type}
          >
            {type}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={filters.date}
        onChange={(e) =>
          onFilterChange(
            "date",
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Interviewer"
        value={filters.interviewer}
        onChange={(e) =>
          onFilterChange(
            "interviewer",
            e.target.value
          )
        }
      />

    </div>
  );
};

export default InterviewFilters;