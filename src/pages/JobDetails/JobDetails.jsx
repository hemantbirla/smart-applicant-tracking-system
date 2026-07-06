import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import ApplyButton from "../../components/jobs/ApplyButton";
import ApplyJobModal from "../../components/application/ApplyJobModal";

import useApplications from "../../hooks/useApplications";

import { getJobById } from "../../services/jobService";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const {
    isAlreadyApplied,
    refreshApplications,
  } = useApplications();

  useEffect(() => {
    loadJob();
  }, [id]);

  const loadJob = async () => {
    try {
      setLoading(true);

      const data = await getJobById(id);

      setJob(data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="container py-4">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  if (!job) {
    return (
      <DashboardLayout>
        <div className="container py-4">
          <h2>Job Not Found</h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container py-4">

        <h1>{job.title}</h1>

        <h3>{job.company}</h3>

        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Experience:</strong>{" "}
          {job.experience}
        </p>

        <p>
          <strong>Employment Type:</strong>{" "}
          {job.employmentType}
        </p>

        <p>
          <strong>Work Mode:</strong>{" "}
          {job.workMode}
        </p>

        <p style={{ marginTop: 20 }}>
          {job.description}
        </p>

        <div style={{ marginTop: 30 }}>
          <ApplyButton
            applied={isAlreadyApplied(job.id)}
            onClick={() => setShowModal(true)}
          />
        </div>

        {showModal && (
          <ApplyJobModal
            job={job}
            onClose={() => setShowModal(false)}
            onSuccess={refreshApplications}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default JobDetails;