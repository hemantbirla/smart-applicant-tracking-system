import * as yup from "yup";

export const interviewSchema = yup.object({
  candidate: yup.string().trim().required("Candidate name is required"),

  job: yup.string().trim().required("Job title is required"),

  type: yup.string().required("Interview type is required"),

  date: yup
    .string()
    .required("Interview date is required")
    .test("future-date", "Date cannot be in the past", (value) => {
      if (!value) return false;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return new Date(value) >= today;
    }),

  time: yup.string().required("Interview time is required"),

  duration: yup
    .number()
    .typeError("Duration is required")
    .positive("Duration must be greater than zero")
    .required("Duration is required"),

  interviewer: yup.string().trim().required("Interviewer is required"),

  meetingLink: yup
    .string()
    .url("Enter a valid meeting URL")
    .required("Meeting link is required"),

  notes: yup.string(),
});
