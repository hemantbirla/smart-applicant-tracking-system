import * as yup from "yup";

export const editProfileSchema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  phone: yup
    .string()
    .required("Phone is required")
    .matches(
      /^[0-9]{10}$/,
      "Enter a valid 10-digit phone number"
    ),

  address: yup
    .string()
    .required("Address is required"),

  linkedin: yup
    .string()
    .url("Enter a valid LinkedIn URL")
    .required("LinkedIn URL is required"),

  github: yup
    .string()
    .url("Enter a valid GitHub URL")
    .required("GitHub URL is required"),

  portfolio: yup
    .string()
    .url("Enter a valid Portfolio URL")
    .required("Portfolio URL is required"),
});