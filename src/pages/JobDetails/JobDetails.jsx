import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import jobData from "../../constants/jobData";

import CompanyDetails from "../../components/jobs/CompanyDetails";
import ApplyButton from "../../components/jobs/ApplyButton";
import ApplyJobModal from "../../components/application/ApplyJobModal";

import { applyJob } from "../../services/applicationService";

import "../../styles/jobs.css";

const JobDetails = () => {
  const { jobId } = useParams();

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const [applied, setApplied] = useState(false);

  const job = jobData.find(
    (j) => j.id === Number(jobId)
  );

  if (!job) {
    return (
      <div className="job-not-found">
        <h2>Job Not Found</h2>

        <button
          className="details-btn"
          onClick={() => navigate("/jobs")}
        >
          Back to Jobs
        </button>
      </div>
    );
  }

  const handleSubmitApplication = async (formData) => {
    try {
      await applyJob(job.id, {
        company: job.company,
        position: job.title,
        location: job.location,
        appliedDate: new Date()
          .toISOString()
          .split("T")[0],
        status: "Applied",
        ...formData,
      });

      toast.success("Application Submitted Successfully");

      setApplied(true);

      setOpenModal(false);
    } catch (error) {
      toast.error("Failed to submit application.");
    }
  };

  return (
    <div className="job-details-container">
      {/* Header */}
      <div className="job-header">
        <div className="job-title-section">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="company-logo"
          />

          <div>
            <h1>{job.title}</h1>

            <h3>{job.company}</h3>

            <p className="posted-date">
              Posted: {job.postedAt}
            </p>
          </div>
        </div>

        <div className="job-meta">
          <span>{job.location}</span>

          <span>{job.salary}</span>

          <span>{job.experience}</span>

          <span>{job.employmentType}</span>
        </div>
      </div>

      {/* Description */}
      <div className="job-section">
        <h2>Job Description</h2>

        <p>{job.description}</p>
      </div>

      {/* Responsibilities */}
      <div className="job-section">
        <h2>Responsibilities</h2>

        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="job-section">
        <h2>Requirements</h2>

        <ul>
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="job-section">
        <h2>Benefits</h2>

        <ul>
          {job.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="job-section">
        <h2>Required Skills</h2>

        <div className="skills-container">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="skill-tag"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <CompanyDetails job={job} />

      <div className="job-apply">
        <ApplyButton
          jobId={job.id}
          applied={applied}
          onApply={() => {
            setOpenModal(true);
          }}
        />
      </div>

      <ApplyJobModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleSubmitApplication}
      />
    </div>
  );
};

export default JobDetails;