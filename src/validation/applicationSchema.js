import * as yup from "yup";

export const applicationSchema = yup.object({
  resume: yup
    .string()
    .required("Please select a resume."),

  coverLetter: yup
    .string()
    .required("Cover letter is required.")
    .min(50, "Minimum 50 characters."),

  portfolio: yup
    .string()
    .url("Enter a valid Portfolio URL.")
    .nullable(),

  linkedin: yup
    .string()
    .url("Enter a valid LinkedIn URL.")
    .nullable(),
});