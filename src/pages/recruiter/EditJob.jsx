import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import JobForm from "../../components/jobs/JobForm";

import {
  getJobById,
  updateJob,
} from "../../services/jobService";

const EditJob = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id);

        setJob(data);
      } catch (error) {
        toast.error("Unable to load job.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      await updateJob(id, formData);

      toast.success("Job updated successfully.");

      navigate("/recruiter/jobs");
    } catch (error) {
      toast.error("Failed to update job.");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="page-container">
          <h2>Loading Job...</h2>
        </div>
      </DashboardLayout>
    );
  }

  if (!job) {
    return (
      <DashboardLayout>
        <div className="page-container">
          <h2>Job not found.</h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="page-container">
        <h1>Edit Job</h1>

        <JobForm
          key={job.id}
          defaultValues={job}
          onSubmit={handleUpdate}
        />
      </div>
    </DashboardLayout>
  );
};

export default EditJob;