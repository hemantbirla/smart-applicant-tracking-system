import {
  FiUsers,
  FiUserCheck,
  FiBriefcase,
  FiFileText,
  FiCalendar,
  FiAward,
  FiCheckCircle,
  FiClock,
  FiPlus,
  FiSettings,
  FiBarChart2,
  FiShield,
} from "react-icons/fi";

/* ============================
   Dashboard Statistics
============================ */

export const adminStatistics = [
  {
    id: 1,
    title: "Total Users",
    count: 2480,
    icon: FiUsers,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Recruiters",
    count: 184,
    icon: FiUserCheck,
    color: "#10B981",
  },
  {
    id: 3,
    title: "Jobs",
    count: 612,
    icon: FiBriefcase,
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Applications",
    count: 12456,
    icon: FiFileText,
    color: "#EC4899",
  },
  {
    id: 5,
    title: "Interviews",
    count: 428,
    icon: FiCalendar,
    color: "#8B5CF6",
  },
  {
    id: 6,
    title: "Offers",
    count: 87,
    icon: FiAward,
    color: "#14B8A6",
  },
  {
    id: 7,
    title: "Active Jobs",
    count: 276,
    icon: FiCheckCircle,
    color: "#22C55E",
  },
  {
    id: 8,
    title: "Pending Approvals",
    count: 18,
    icon: FiClock,
    color: "#EF4444",
  },
];

/* ============================
   User Summary
============================ */

export const userSummary = {
  candidates: 2100,
  recruiters: 184,
  admins: 6,
  newUsersToday: 42,
  inactiveUsers: 97,
};

/* ============================
   Recruiter Summary
============================ */

export const recruiterSummary = {
  verified: 160,
  pending: 18,
  blocked: 6,
  topRecruiter: "Google",
};

/* ============================
   Job Summary
============================ */

export const jobSummary = {
  open: 276,
  closed: 214,
  expired: 68,
  draft: 54,
};

/* ============================
   Application Summary
============================ */

export const applicationSummary = {
  today: 148,
  thisWeek: 946,
  thisMonth: 3848,
  offersReleased: 87,
};

/* ============================
   Recent Activities
============================ */

export const recentActivities = [
  {
    id: 1,
    activity: "John applied for React Developer",
    time: "5 mins ago",
  },
  {
    id: 2,
    activity: "Amazon posted Backend Developer",
    time: "20 mins ago",
  },
  {
    id: 3,
    activity: "Google approved a recruiter",
    time: "45 mins ago",
  },
  {
    id: 4,
    activity: "Microsoft closed Frontend Developer",
    time: "2 hours ago",
  },
  {
    id: 5,
    activity: "Admin blocked recruiter account",
    time: "Yesterday",
  },
];

/* ============================
   System Health
============================ */

export const systemHealth = [
  {
    id: 1,
    service: "API Server",
    status: "Online",
    color: "#22C55E",
  },
  {
    id: 2,
    service: "Database",
    status: "Healthy",
    color: "#22C55E",
  },
  {
    id: 3,
    service: "Authentication",
    status: "Online",
    color: "#22C55E",
  },
  {
    id: 4,
    service: "Storage",
    status: "Healthy",
    color: "#22C55E",
  },
  {
    id: 5,
    service: "Email Service",
    status: "Slow",
    color: "#F59E0B",
  },
];

/* ============================
   Top Companies
============================ */

export const topCompanies = [
  {
    id: 1,
    company: "Google",
    jobs: 48,
    applications: 1240,
  },
  {
    id: 2,
    company: "Microsoft",
    jobs: 42,
    applications: 1088,
  },
  {
    id: 3,
    company: "Amazon",
    jobs: 39,
    applications: 965,
  },
  {
    id: 4,
    company: "Adobe",
    jobs: 26,
    applications: 742,
  },
  {
    id: 5,
    company: "Netflix",
    jobs: 18,
    applications: 486,
  },
];

/* ============================
   Quick Actions
============================ */

export const quickActions = [
  {
    id: 1,
    title: "Add Recruiter",
    icon: FiPlus,
  },
  {
    id: 2,
    title: "Approve Recruiter",
    icon: FiCheckCircle,
  },
  {
    id: 3,
    title: "Manage Jobs",
    icon: FiBriefcase,
  },
  {
    id: 4,
    title: "Manage Users",
    icon: FiUsers,
  },
  {
    id: 5,
    title: "Reports",
    icon: FiBarChart2,
  },
  {
    id: 6,
    title: "Settings",
    icon: FiSettings,
  },
];