import {
  FiHome,
  FiBriefcase,
  FiUsers,
  FiFileText,
  FiCalendar,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export const recruiterSidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: FiHome,
    path: "/recruiter/dashboard",
  },
  {
    id: 2,
    title: "Jobs",
    icon: FiBriefcase,
    path: "/recruiter/jobs",
  },
  {
    id: 3,
    title: "Applications",
    icon: FiFileText,
    path: "/recruiter/applications",
  },
  {
    id: 4,
    title: "Applicants",
    icon: FiUsers,
    path: "/recruiter/applicants",
  },
  {
    id: 5,
    title: "Interviews",
    icon: FiCalendar,
    path: "/recruiter/interviews",
  },
  {
    id: 6,
    title: "Company",
    icon: HiOutlineBuildingOffice2,
    path: "/recruiter/company",
  },
  {
    id: 7,
    title: "Reports",
    icon: FiBarChart2,
    path: "/recruiter/reports",
  },
  {
    id: 8,
    title: "Settings",
    icon: FiSettings,
    path: "/recruiter/settings",
  },
];

export const recruiterLogoutItem = {
  id: 9,
  title: "Logout",
  icon: FiLogOut,
  path: "/login",
};
