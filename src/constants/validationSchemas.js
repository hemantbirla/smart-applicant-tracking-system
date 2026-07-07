import * as yup from "yup";
import { validationMessages } from "./validationMessages";

// ======================================================
// Login Schema
// ======================================================

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  password: yup
    .string()
    .trim()
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),
});

// ======================================================
// Signup Schema
// ======================================================

export const signupSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required(validationMessages.fullName.required),

  email: yup
    .string()
    .trim()
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  password: yup
    .string()
    .trim()
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),

  confirmPassword: yup
    .string()
    .trim()
    .required(validationMessages.confirmPassword.required)
    .oneOf(
      [yup.ref("password")],
      validationMessages.confirmPassword.match
    ),
});

// ======================================================
// Forgot Password Schema
// ======================================================

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),
});

// ======================================================
// Reset Password Schema
// ======================================================

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .trim()
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),

  confirmPassword: yup
    .string()
    .trim()
    .required(validationMessages.confirmPassword.required)
    .oneOf(
      [yup.ref("password")],
      validationMessages.confirmPassword.match
    ),
});

// ======================================================
// Personal Information Schema
// ======================================================

export const personalInfoSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required(validationMessages.personalInfo.firstNameRequired),

  lastName: yup
    .string()
    .trim()
    .required(validationMessages.personalInfo.lastNameRequired),

  title: yup
    .string()
    .trim()
    .required("Job title is required"),

  email: yup
    .string()
    .trim()
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  phone: yup
    .string()
    .trim()
    .required(validationMessages.personalInfo.phoneRequired),

  dob: yup
    .string()
    .required(validationMessages.personalInfo.dobRequired),

  location: yup
    .string()
    .trim()
    .required("Location is required"),

  linkedin: yup
    .string()
    .trim()
    .url(validationMessages.personalInfo.invalidUrl)
    .nullable()
    .transform((value) => (value === "" ? null : value)),

  github: yup
    .string()
    .trim()
    .url(validationMessages.personalInfo.invalidUrl)
    .nullable()
    .transform((value) => (value === "" ? null : value)),

  portfolio: yup
    .string()
    .trim()
    .url(validationMessages.personalInfo.invalidUrl)
    .nullable()
    .transform((value) => (value === "" ? null : value)),
});

// ======================================================
// Recruiter Job Schema
// ======================================================

export const jobSchema = yup.object({
  title: yup
    .string()
    .trim()
    .required("Job title is required"),

  company: yup
    .string()
    .trim()
    .required("Company name is required"),

  location: yup
    .string()
    .trim()
    .required("Location is required"),

  jobType: yup
    .string()
    .trim()
    .required("Job type is required"),

  experience: yup
    .string()
    .trim()
    .required("Experience level is required"),

  salary: yup
    .string()
    .trim()
    .required("Salary range is required"),

  skills: yup
    .string()
    .trim()
    .required("Skills are required"),

  description: yup
    .string()
    .trim()
    .required("Description is required"),

  requirements: yup
    .string()
    .trim()
    .required("Requirements are required"),

  responsibilities: yup
    .string()
    .trim()
    .required("Responsibilities are required"),

  deadline: yup
    .date()
    .required("Application deadline is required")
    .typeError("Please select a valid date"),

  status: yup
    .string()
    .trim()
    .required("Status is required"),
});