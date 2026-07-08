import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import { getJobById } from "../../services/jobService";

import JobStatusBadge from "../../components/jobs/JobStatusBadge";

const ViewJob = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJob = async () => {
      try {
        const data = await getJobById(id);

        setJob(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="page-container">Loading...</div>
      </DashboardLayout>
    );
  }

  if (!job) {
    return (
      <DashboardLayout>
        <div className="page-container">Job not found.</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="page-container">
        <div className="page-header">
          <h1>{job.title}</h1>

          <button className="primary-btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>

        <div className="job-details-card">
          <div className="job-detail-row">
            <strong>Company</strong>
            <span>{job.company}</span>
          </div>

          <div className="job-detail-row">
            <strong>Location</strong>
            <span>{job.location}</span>
          </div>

          <div className="job-detail-row">
            <strong>Employment Type</strong>
            <span>{job.employmentType}</span>
          </div>

          <div className="job-detail-row">
            <strong>Experience</strong>
            <span>{job.experience}</span>
          </div>

          <div className="job-detail-row">
            <strong>Salary</strong>
            <span>{job.salary}</span>
          </div>

          <div className="job-detail-row">
            <strong>Status</strong>
            <JobStatusBadge status={job.status} />
          </div>

          <div className="job-detail-row">
            <strong>Applicants</strong>
            <span>{job.applicants}</span>
          </div>

          <div className="job-detail-row">
            <strong>Deadline</strong>
            <span>{job.applicationDeadline}</span>
          </div>

          <hr />

          <h3>Description</h3>

          <p>{job.description}</p>

          <h3>Requirements</h3>

          <p>{job.requirements}</p>

          <h3>Responsibilities</h3>

          <p>{job.responsibilities}</p>

          <h3>Skills</h3>

          <h3>Skills</h3>

          <div className="skills-list">
            {job.skills ? (
              // If it's a string, split it by commas. If it's already an array, use it directly.
              (typeof job.skills === "string"
                ? job.skills.split(",")
                : job.skills
              ).map((skill) => {
                const trimmedSkill = skill.trim(); // Cleans up accidental spaces like " React"
                return trimmedSkill ? (
                  <span key={trimmedSkill} className="skill-chip">
                    {trimmedSkill}
                  </span>
                ) : null;
              })
            ) : (
              <span>No skills specified</span>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewJob;
