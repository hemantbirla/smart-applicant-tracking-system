import {
  FiBriefcase,
  FiUsers,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

// ===============================
// Recruiter Dashboard
// ===============================

export const recruiterHeader = {
  title: "Recruiter Dashboard",
  greeting: "Welcome Back,",
  name: "ABC Technologies",
  subtitle: "Recruiter Portal",
};

// ===============================
// Dashboard Statistics
// ===============================

export const recruiterStats = [
  {
    id: 1,
    title: "Active Jobs",
    count: 24,
    icon: FiBriefcase,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Applications",
    count: 183,
    icon: FiUsers,
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "Interviews",
    count: 32,
    icon: FiCalendar,
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Hired",
    count: 11,
    icon: FiCheckCircle,
    color: "#10B981",
  },
];

// ===============================
// Recent Job Postings
// ===============================

export const recentJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    status: "Open",
    applications: 15,
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "React Developer",
    status: "Closed",
    applications: 42,
    postedDate: "1 week ago",
  },
  {
    id: 3,
    title: "Node.js Developer",
    status: "Draft",
    applications: 0,
    postedDate: "Today",
  },
];

// ===============================
// Recent Applications
// ===============================

export const recentCandidates = [
  {
    id: 1,
    name: "Rahul Sharma",
    jobTitle: "React Developer",
    status: "Applied Today",
  },
  {
    id: 2,
    name: "Priya Singh",
    jobTitle: "Frontend Engineer",
    status: "Interview Scheduled",
  },
  {
    id: 3,
    name: "Amit Verma",
    jobTitle: "Node.js Developer",
    status: "Resume Reviewed",
  },
];

// ===============================
// Company Summary
// ===============================

export const companySummary = {
  companyName: "ABC Technologies",
  logo: "https://ui-avatars.com/api/?name=ABC+Technologies&background=2563eb&color=fff",
  industry: "Software Development",
  location: "Pune, Maharashtra",
  totalEmployees: 850,
  openPositions: 24,
  recruiter: "John Smith",
  website: "https://abctecnologies.com",
};
