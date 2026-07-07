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
      noValidate
      autoComplete="off"
    >
      <div className="form-grid">
        {/* Job Title */}
        <div className="form-group">
          <label>Job Title</label>

          <input
            type="text"
            placeholder="React Developer"
            {...register("title")}
          />

          <small className="form-error">
            {errors.title?.message}
          </small>
        </div>

        {/* Company */}
        <div className="form-group">
          <label>Company</label>

          <input
            type="text"
            placeholder="Google"
            {...register("company")}
          />

          <small className="form-error">
            {errors.company?.message}
          </small>
        </div>

        {/* Location */}
        <div className="form-group">
          <label>Location</label>

          <input
            type="text"
            placeholder="Bangalore"
            {...register("location")}
          />

          <small className="form-error">
            {errors.location?.message}
          </small>
        </div>

        {/* Job Type */}
        <div className="form-group">
          <label>Employment Type</label>

          <select {...register("jobType")}>
            <option value="">Select</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>

          <small className="form-error">
            {errors.jobType?.message}
          </small>
        </div>

        {/* Experience */}
        <div className="form-group">
          <label>Experience</label>

          <input
            type="text"
            placeholder="3-5 Years"
            {...register("experience")}
          />

          <small className="form-error">
            {errors.experience?.message}
          </small>
        </div>

        {/* Salary */}
        <div className="form-group">
          <label>Salary Range</label>

          <input
            type="text"
            placeholder="10-15 LPA"
            {...register("salary")}
          />

          <small className="form-error">
            {errors.salary?.message}
          </small>
        </div>

        {/* Skills */}
        <div className="form-group full-width">
          <label>Skills</label>

          <input
            type="text"
            placeholder="React, JavaScript, Redux"
            {...register("skills")}
          />

          <small className="form-error">
            {errors.skills?.message}
          </small>
        </div>

        {/* Description */}
        <div className="form-group full-width">
          <label>Description</label>

          <textarea
            rows={5}
            {...register("description")}
          />

          <small className="form-error">
            {errors.description?.message}
          </small>
        </div>

        {/* Requirements */}
        <div className="form-group full-width">
          <label>Requirements</label>

          <textarea
            rows={5}
            {...register("requirements")}
          />

          <small className="form-error">
            {errors.requirements?.message}
          </small>
        </div>

        {/* Responsibilities */}
        <div className="form-group full-width">
          <label>Responsibilities</label>

          <textarea
            rows={5}
            {...register("responsibilities")}
          />

          <small className="form-error">
            {errors.responsibilities?.message}
          </small>
        </div>

        {/* Deadline */}
        <div className="form-group">
          <label>Application Deadline</label>

          <input
            type="date"
            {...register("deadline")}
          />

          <small className="form-error">
            {errors.deadline?.message}
          </small>
        </div>

        {/* Status */}
        <div className="form-group">
          <label>Status</label>

          <select {...register("status")}>
            <option value="">Select</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Draft">Draft</option>
            <option value="Expired">Expired</option>
          </select>

          <small className="form-error">
            {errors.status?.message}
          </small>
        </div>
      </div>

      <div className="job-form-actions">
        <button
          type="submit"
          className="primary-btn"
        >
          Save Job
        </button>
      </div>
    </form>
  );
};

export default JobForm;