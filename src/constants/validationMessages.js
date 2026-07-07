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