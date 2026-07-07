import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import JobForm from "../../components/jobs/JobForm";
import useJobs from "../../hooks/useJobs";

const AddJob = () => {
  const navigate = useNavigate();

  const { createJob, loading } = useJobs();

  const handleSubmit = async (data) => {
    try {
      await createJob(data);

      toast.success("Job created successfully.");

      navigate("/recruiter/jobs");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create job.");
    }
  };

  return (
    <DashboardLayout>
      <div className="jobs-page">
        <div className="page-header">
          <h1>Add New Job</h1>
          <p>Create a new job posting.</p>
        </div>

        <JobForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </DashboardLayout>
  );
};

export default AddJob;
