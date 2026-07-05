import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiClock,
} from "react-icons/fi";

const JobMeta = ({ job }) => {
  return (
    <div className="job-meta">
      <span>
        <FiMapPin />
        {job.location}
      </span>

      <span>
        <FiBriefcase />
        {job.experience}
      </span>

      <span>
        <FiDollarSign />
        {job.salary}
      </span>

      <span>
        <FiClock />
        {job.employmentType}
      </span>
    </div>
  );
};

export default JobMeta;