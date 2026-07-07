import * as yup from "yup";

export const jobSchema = yup.object({
  title: yup.string().required("Job title is required"),

  company: yup.string().required("Company name is required"),

  location: yup.string().required("Location is required"),

  employmentType: yup
    .string()
    .required("Employment type is required"),

  experience: yup
    .string()
    .required("Experience level is required"),

  salary: yup.string().required("Salary is required"),

  skills: yup.string().required("Skills are required"),

  description: yup
    .string()
    .required("Job description is required"),

  requirements: yup
    .string()
    .required("Requirements are required"),

  responsibilities: yup
    .string()
    .required("Responsibilities are required"),

  deadline: yup
    .string()
    .required("Application deadline is required"),

  status: yup.string().required("Status is required"),
});