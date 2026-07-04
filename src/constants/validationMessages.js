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
};