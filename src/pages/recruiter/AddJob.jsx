import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import JobForm from "../../components/jobs/JobForm";
import useJobs from "../../hooks/useJobs";

const AddJob = () => {
  const navigate = useNavigate();

  const { createJob } = useJobs();

  const handleCreate = async (data) => {
    try {
      await createJob(data);

      toast.success("Job created successfully");

      navigate("/recruiter/jobs");
    } catch (error) {
      toast.error("Failed to create job");
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="page-container">
        <h1>Add Job</h1>

        <JobForm onSubmit={handleCreate} />
      </div>
    </DashboardLayout>
  );
};

export default AddJob;