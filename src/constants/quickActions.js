import {
  FiPlusCircle,
  FiBriefcase,
  FiFileText,
  FiHome,
  FiBarChart2,
} from "react-icons/fi";

export const quickActions = [
  {
    id: 1,
    title: "Post New Job",
    icon: FiPlusCircle,
    path: "/recruiter/jobs/new",
  },
  {
    id: 2,
    title: "Manage Jobs",
    icon: FiBriefcase,
    path: "/recruiter/jobs",
  },
  {
    id: 3,
    title: "View Applications",
    icon: FiFileText,
    path: "/recruiter/applications",
  },
  {
    id: 4,
    title: "Company Profile",
    icon: FiHome,
    path: "/recruiter/company",
  },
  {
    id: 5,
    title: "Reports",
    icon: FiBarChart2,
    path: "/recruiter/reports",
  },
];