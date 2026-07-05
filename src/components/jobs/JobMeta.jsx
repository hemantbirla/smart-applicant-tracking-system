import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiClock,
} from "react-icons/fi";

const JobMeta = ({
  location,
  experience,
  salary,
  employmentType,
}) => {
  return (
    <div className="job-meta">
      <span>
        <FiMapPin />
        {location}
      </span>

      <span>
        <FiBriefcase />
        {experience}
      </span>

      <span>
        <FiDollarSign />
        {salary}
      </span>

      <span>
        <FiClock />
        {employmentType}
      </span>
    </div>
  );
};

export default JobMeta;