// Employment Types
export const EMPLOYMENT_TYPES = [
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Freelance",
];

// Job Types
export const JOB_TYPES = [
  "All",
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Freelance",
];

// Locations
export const LOCATIONS = [
  "Remote",
  "Hybrid",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Delhi",
  "Chennai",
  "Noida",
];

// Experience
export const EXPERIENCE_LEVELS = [
  { label: "All", value: "" },
  { label: "Fresher", value: "Fresher" },
  { label: "Junior", value: "Junior" },
  { label: "Mid Level", value: "Mid Level" },
  { label: "Senior", value: "Senior" },
];

// Status
export const JOB_STATUS = [
  "All",
  "Open",
  "Closed",
  "Draft",
  "Expired",
];

// Sort
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

// Salary
export const SALARY_RANGES = [
  { label: "Any Salary", value: "" },
  { label: "3-5 LPA", value: "3-5 LPA" },
  { label: "5-8 LPA", value: "5-8 LPA" },
  { label: "8-12 LPA", value: "8-12 LPA" },
  { label: "12-18 LPA", value: "12-18 LPA" },
  { label: "18-25 LPA", value: "18-25 LPA" },
  { label: "25+ LPA", value: "25+ LPA" },
];

export const DEFAULT_JOB_FILTERS = {
  search: "",
  location: "",
  jobType: "",
  experience: "",
  status: "",
  workMode: "",
  salary: "",
  sortBy: "newest",
};

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

export const WORK_MODES = [
  "Remote",
  "Hybrid",
  "Onsite",
];

export const PAGE_SIZE = 10;