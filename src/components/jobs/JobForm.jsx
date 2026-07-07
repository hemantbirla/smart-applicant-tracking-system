import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { jobSchema } from "../../constants/validationSchemas";

const JobForm = ({
  defaultValues = {},
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(jobSchema),
    defaultValues,
  });

  return (
    <form
      className="job-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-grid">
        <div className="form-group">
          <label>Job Title</label>

          <input
            {...register("title")}
            placeholder="React Developer"
          />

          <p>{errors.title?.message}</p>
        </div>

        <div className="form-group">
          <label>Company</label>

          <input
            {...register("company")}
            placeholder="Google"
          />

          <p>{errors.company?.message}</p>
        </div>

        <div className="form-group">
          <label>Location</label>

          <input
            {...register("location")}
            placeholder="Bangalore"
          />

          <p>{errors.location?.message}</p>
        </div>

        <div className="form-group">
          <label>Employment Type</label>

          <select {...register("jobType")}>
            <option value="">Select</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>

          <p>{errors.jobType?.message}</p>
        </div>

        <div className="form-group">
          <label>Experience</label>

          <input
            {...register("experience")}
            placeholder="3-5 Years"
          />

          <p>{errors.experience?.message}</p>
        </div>

        <div className="form-group">
          <label>Salary</label>

          <input
            {...register("salary")}
            placeholder="10-15 LPA"
          />

          <p>{errors.salary?.message}</p>
        </div>

        <div className="form-group full-width">
          <label>Skills</label>

          <input
            {...register("skills")}
            placeholder="React, JavaScript, Redux"
          />

          <p>{errors.skills?.message}</p>
        </div>

        <div className="form-group full-width">
          <label>Description</label>

          <textarea
            rows={5}
            {...register("description")}
          />

          <p>{errors.description?.message}</p>
        </div>

        <div className="form-group full-width">
          <label>Requirements</label>

          <textarea
            rows={5}
            {...register("requirements")}
          />

          <p>{errors.requirements?.message}</p>
        </div>

        <div className="form-group full-width">
          <label>Responsibilities</label>

          <textarea
            rows={5}
            {...register("responsibilities")}
          />

          <p>{errors.responsibilities?.message}</p>
        </div>

        <div className="form-group">
          <label>Application Deadline</label>

          <input
            type="date"
            {...register("deadline")}
          />

          <p>{errors.deadline?.message}</p>
        </div>

        <div className="form-group">
          <label>Status</label>

          <select {...register("status")}>
            <option>Open</option>
            <option>Closed</option>
            <option>Draft</option>
            <option>Expired</option>
          </select>

          <p>{errors.status?.message}</p>
        </div>
      </div>

      <button
        type="submit"
        className="primary-btn"
      >
        Save Job
      </button>
    </form>
  );
};

export default JobForm;