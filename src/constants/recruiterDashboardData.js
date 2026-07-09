import {
  FiHome,
  FiBriefcase,
  FiUsers,
  FiFileText,
  FiCheckCircle,
  FiCalendar,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

export const recruiterSidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    path: "/recruiter/dashboard",
    icon: FiHome,
  },
  {
    id: 2,
    title: "Manage Jobs",
    path: "/recruiter/jobs",
    icon: FiBriefcase,
  },
  {
    id: 3,
    title: "Applicants",
    path: "/recruiter/applicants",
    icon: FiUsers,
  },
  {
    id: 4,
    title: "Applications",
    path: "/recruiter/applications",
    icon: FiFileText,
  },
  {
    id: 5,
    title: "Interviews",
    path: "/recruiter/interviews",
    icon: FiCalendar,
  },
  {
    id: 6,
    title: "Company",
    path: "/recruiter/company",
    icon: FaBuilding,
  },
  {
    id: 7,
    title: "Reports",
    path: "/recruiter/reports",
    icon: FiBarChart2,
  },
  {
    id: 8,
    title: "Settings",
    path: "/recruiter/settings",
    icon: FiSettings,
  },
];

export const recruiterLogoutItem = {
  title: "Logout",
  icon: FiLogOut,
};

// ===============================
// Recruiter Dashboard
// ===============================

export const recruiterHeader = {
  greeting: "Welcome Back 👋",
  name: "ABC Technologies",
  role: "Recruiter Portal",
  description: "Find the best talent faster and build your dream team.",
  logo: "AT",
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
  logo: "https://ui-avatars.com/api/?name=ABC+Technologies&background=2563eb&color=fff",
  companyName: "ABC Technologies",
  industry: "Software Development",
  location: "Pune, Maharashtra",
  employees: 850,
  openPositions: 24,
  recruiter: "Hemant Birla",
  website: "https://abctecnologies.com",
  email: "hr@abctechnologies.com",
};
