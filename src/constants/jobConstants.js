// ===============================
// Employment Types
// ===============================

export const EMPLOYMENT_TYPES = [
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Freelance",
  "Remote",
];

// ===============================
// Experience Levels
// ===============================

export const EXPERIENCE_LEVELS = [
  "All",
  "Fresher",
  "Junior",
  "Mid Level",
  "Senior",
];

// ===============================
// Job Status
// ===============================

export const JOB_STATUS = [
  "All",
  "Open",
  "Closed",
  "Draft",
  "Expired",
];

// ===============================
// Job Types
// ===============================

export const JOB_TYPES = [
  "All",
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Remote",
];

// ===============================
// Locations
// ===============================

export const JOB_LOCATIONS = [
  "Remote",
  "Hybrid",
  "Onsite",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Delhi",
  "Chennai",
  "Noida",
];

// ===============================
// Sort Options
// ===============================

export const SORT_OPTIONS = [
  {
    label: "Newest First",
    value: "newest",
  },
  {
    label: "Oldest First",
    value: "oldest",
  },
  {
    label: "Most Applicants",
    value: "applicants",
  },
  {
    label: "A-Z",
    value: "title",
  },
];

// ===============================
// Salary Range
// ===============================

export const SALARY_RANGES = [
  "3-5 LPA",
  "5-8 LPA",
  "8-12 LPA",
  "12-18 LPA",
  "18-25 LPA",
  "25+ LPA",
];

// ===============================
// Default Filter Values
// ===============================

export const DEFAULT_JOB_FILTERS = {
  search: "",
  location: "",
  employmentType: "",
  experience: "",
  status: "",
  sortBy: "newest",
};

// ===============================
// Initial Job Form Values
// ===============================

export const INITIAL_JOB_VALUES = {
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
  applicationDeadline: "",
  status: "Draft",
};

// ===============================
// Table Headers
// ===============================

export const JOB_TABLE_COLUMNS = [
  "Title",
  "Location",
  "Job Type",
  "Experience",
  "Status",
  "Posted Date",
  "Applicants",
  "Actions",
];

// ===============================
// Pagination
// ===============================

export const PAGE_SIZE = 10;