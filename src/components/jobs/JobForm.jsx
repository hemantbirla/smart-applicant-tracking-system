import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { jobSchema } from "../../constants/jobValidation";
import {
  JOB_TYPES,
  EXPERIENCE_LEVELS,
  JOB_STATUS,
} from "../../constants/jobConstants";

import "../../styles/jobs.css";

const JobForm = ({ defaultValues = {}, onSubmit, loading = false }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(jobSchema),

    defaultValues: {
      title: "",
      company: "",
      location: "",
      employmentType: "",
      experience: "",
      salary: "",
      skills: "",
      description: "",
      requirements: "",
      responsibilities: "",
      deadline: "",
      status: "Open",
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues?.title) {
      reset(defaultValues);
    }
  }, [reset]);

  return (
    <form className="job-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="job-grid">
        <Input
          label="Job Title"
          name="title"
          register={register}
          error={errors.title}
        />

        <Input
          label="Company"
          name="company"
          register={register}
          error={errors.company}
        />

        <Input
          label="Location"
          name="location"
          register={register}
          error={errors.location}
        />

        <Select
          label="Employment Type"
          name="employmentType"
          options={JOB_TYPES}
          register={register}
          error={errors.employmentType}
        />

        <Select
          label="Experience"
          name="experience"
          options={EXPERIENCE_LEVELS}
          register={register}
          error={errors.experience}
        />

        <Input
          label="Salary"
          name="salary"
          register={register}
          error={errors.salary}
        />

        <Input
          label="Skills"
          name="skills"
          placeholder="React, Node.js..."
          register={register}
          error={errors.skills}
        />

        <Select
          label="Status"
          name="status"
          options={JOB_STATUS}
          register={register}
          error={errors.status}
        />
      </div>

      <TextArea
        label="Description"
        name="description"
        register={register}
        error={errors.description}
      />

      <TextArea
        label="Requirements"
        name="requirements"
        register={register}
        error={errors.requirements}
      />

      <TextArea
        label="Responsibilities"
        name="responsibilities"
        register={register}
        error={errors.responsibilities}
      />

      <div className="job-grid">
        <Input
          type="date"
          label="Application Deadline"
          name="deadline"
          register={register}
          error={errors.deadline}
        />
      </div>

      <button className="job-submit-btn" disabled={loading}>
        {loading ? "Saving..." : "Save Job"}
      </button>
    </form>
  );
};

const Input = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder = "",
}) => (
  <div className="job-field">
    <label>{label}</label>

    <input type={type} placeholder={placeholder} {...register(name)} />

    {error && <p className="job-error">{error.message}</p>}
  </div>
);

const Select = ({ label, name, options, register, error }) => (
  <div className="job-field">
    <label>{label}</label>

    <select {...register(name)}>
      <option value="">Select</option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    {error && <p className="job-error">{error.message}</p>}
  </div>
);

const TextArea = ({ label, name, register, error }) => (
  <div className="job-field">
    <label>{label}</label>

    <textarea rows={5} {...register(name)} />

    {error && <p className="job-error">{error.message}</p>}
  </div>
);

export default JobForm;
