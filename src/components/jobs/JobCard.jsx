import { useNavigate } from "react-router-dom";
import { useState } from "react";

import JobMeta from "./JobMeta";
import JobTags from "./JobTags";
import SaveJobButton from "./SaveJobButton";
import ApplyButton from "./ApplyButton";

import ApplyJobModal from "../application/ApplyJobModal";
import useApplications from "../../hooks/useApplications";

import "../../styles/jobs.css";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const { isAlreadyApplied, refreshApplications } = useApplications();

  if (!job) return null;

  return (
    <>
      <div className="job-card">
        {/* Header */}
        <div className="job-header">
          <div className="job-header-left">
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="company-logo"
              />
            )}

            <div>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
            </div>
          </div>

          <SaveJobButton job={job} />
        </div>

        {/* Job Meta */}
        <JobMeta job={job} />

        {/* Skills */}
        <JobTags skills={job.skills} />

        {/* Footer */}
        <div className="job-card-footer">
          <span>{job.postedDate || job.postedAt}</span>

          <div className="job-card-actions">
            <ApplyButton
              applied={isAlreadyApplied(job.id)}
              onClick={() => setShowModal(true)}
            />

            <button
              className="details-btn"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <ApplyJobModal
          job={job}
          onClose={() => setShowModal(false)}
          onSuccess={refreshApplications}
        />
      )}
    </>
  );
};

export default JobCard;
