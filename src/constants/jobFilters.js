export const LOCATIONS = [
  "Remote",
  "Hybrid",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Delhi",
  "Chennai",
  "Noida",
];

export const JOB_TYPES = [
  "Full Time",
  "Part Time",
  "Internship",
  "Contract",
  "Freelance",
];

export const EXPERIENCE_LEVELS = [
  { label: "0-1 Years", value: "0-1" },
  { label: "1-3 Years", value: "1-3" },
  { label: "3-5 Years", value: "3-5" },
  { label: "5-8 Years", value: "5-8" },
  { label: "8+ Years", value: "8+" },
];

export const SALARY_RANGES = [
  { label: "5+ LPA", value: 5 },
  { label: "10+ LPA", value: 10 },
  { label: "15+ LPA", value: 15 },
  { label: "20+ LPA", value: 20 },
  { label: "30+ LPA", value: 30 },
];

export const WORK_MODES = ["Remote", "Hybrid", "Onsite"];

export const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Salary: High to Low", value: "salaryDesc" },
  { label: "Salary: Low to High", value: "salaryAsc" },
  { label: "Company Name", value: "company" },
  { label: "Job Title", value: "title" },
];

export const INITIAL_FILTERS = {
  location: "",
  jobType: "",
  experience: "",
  salary: "",
  workMode: "",
};
