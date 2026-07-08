import * as yup from "yup";

export const validationMessages = {
  // ==============================
  // Authentication
  // ==============================
  fullName: {
    required: "Full name is required",
  },

  email: {
    required: "Email is required",
    invalid: "Enter a valid email address",
  },

  password: {
    required: "Password is required",
    min: "Password must be at least 8 characters",
  },

  confirmPassword: {
    required: "Confirm password is required",
    match: "Passwords must match",
  },

  // ==============================
  // Personal Information
  // ==============================
  personalInfo: {
    firstNameRequired: "First name is required",
    lastNameRequired: "Last name is required",
    phoneRequired: "Phone number is required",
    dobRequired: "Date of birth is required",
    addressRequired: "Address is required",
    invalidUrl: "Enter a valid URL",
  },

  // ==============================
  // Recruiter Jobs
  // ==============================
  job: {
    titleRequired: "Job title is required.",
    companyRequired: "Company name is required.",
    locationRequired: "Location is required.",
    jobTypeRequired: "Employment type is required.",
    experienceRequired: "Experience level is required.",
    salaryRequired: "Salary range is required.",
    skillsRequired: "Skills are required.",
    descriptionRequired: "Job description is required.",
    requirementsRequired: "Requirements are required.",
    responsibilitiesRequired: "Responsibilities are required.",
    deadlineRequired: "Application deadline is required.",
    invalidDeadline: "Please select a valid date.",
    statusRequired: "Job status is required.",
  },
};

// Helper function to safely trim only if value is a string
const safeTrim = (value) => (typeof value === "string" ? value.trim() : value);

/* =====================================================
   Login
===================================================== */

export const loginSchema = yup.object({
  email: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  password: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),
});

/* =====================================================
   Signup
===================================================== */

export const signupSchema = yup.object({
  fullName: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.fullName.required),

  email: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  password: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),

  confirmPassword: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.confirmPassword.required)
    .oneOf(
      [yup.ref("password")],
      validationMessages.confirmPassword.match
    ),
});

/* =====================================================
   Forgot Password
===================================================== */

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),
});

/* =====================================================
   Reset Password
===================================================== */

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),

  confirmPassword: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.confirmPassword.required)
    .oneOf(
      [yup.ref("password")],
      validationMessages.confirmPassword.match
    ),
});

/* =====================================================
   Personal Information
===================================================== */

export const personalInfoSchema = yup.object({
  firstName: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.personalInfo.firstNameRequired),

  lastName: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.personalInfo.lastNameRequired),

  title: yup
    .string()
    .transform(safeTrim)
    .required("Job title is required"),

  email: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  phone: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.personalInfo.phoneRequired),

  dob: yup
    .string()
    .required(validationMessages.personalInfo.dobRequired),

  location: yup
    .string()
    .transform(safeTrim)
    .required("Location is required"),

  linkedin: yup
    .string()
    .nullable()
    .transform((value) => (value === "" || typeof value !== "string" ? null : value.trim()))
    .url(validationMessages.personalInfo.invalidUrl),

  github: yup
    .string()
    .nullable()
    .transform((value) => (value === "" || typeof value !== "string" ? null : value.trim()))
    .url(validationMessages.personalInfo.invalidUrl),

  portfolio: yup
    .string()
    .nullable()
    .transform((value) => (value === "" || typeof value !== "string" ? null : value.trim()))
    .url(validationMessages.personalInfo.invalidUrl),
});

/* =====================================================
   Recruiter Job Schema
===================================================== */

export const jobSchema = yup.object({
  title: yup
    .string()
    .transform(safeTrim)
    .min(3, "Job title must be at least 3 characters")
    .max(100, "Job title cannot exceed 100 characters")
    .required(validationMessages.job.titleRequired),

  company: yup
    .string()
    .transform(safeTrim)
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 100 characters")
    .required(validationMessages.job.companyRequired),

  location: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.job.locationRequired),

  jobType: yup
    .string()
    .required(validationMessages.job.jobTypeRequired),

  experience: yup
    .string()
    .required(validationMessages.job.experienceRequired),

  salary: yup
    .string()
    .transform(safeTrim)
    .required(validationMessages.job.salaryRequired),

  // If skills come as an array from the form component, we handle it safely here
  skills: yup
    .mixed()
    .required(validationMessages.job.skillsRequired)
    .transform((value) => {
      if (Array.isArray(value)) return value.join(", ");
      return typeof value === "string" ? value.trim() : value;
    }),

  description: yup
    .string()
    .transform(safeTrim)
    .min(50, "Description should be at least 50 characters")
    .required(validationMessages.job.descriptionRequired),

  requirements: yup
    .string()
    .transform(safeTrim)
    .min(30, "Requirements should be at least 30 characters")
    .required(validationMessages.job.requirementsRequired),

  responsibilities: yup
    .string()
    .transform(safeTrim)
    .min(30, "Responsibilities should be at least 30 characters")
    .required(validationMessages.job.responsibilitiesRequired),

  deadline: yup
    .date()
    .typeError(validationMessages.job.invalidDeadline)
    .required(validationMessages.job.deadlineRequired),

  status: yup
    .string()
    .oneOf(["Open", "Closed", "Draft", "Expired"], "Invalid job status")
    .required(validationMessages.job.statusRequired),
});