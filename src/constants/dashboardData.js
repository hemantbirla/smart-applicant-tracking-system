import {
  FiHome,
  FiBriefcase,
  FiFileText,
  FiHeart,
  FiUser,
  FiLogOut,
  FiClipboard,
  FiCalendar,
  FiAward,
  FiShield,
} from "react-icons/fi";

// Dashboard Statistics
export const dashboardData = [
  {
    id: 1,
    title: "Applied Jobs",
    count: 18,
    icon: FiClipboard,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Saved Jobs",
    count: 12,
    icon: FiHeart,
    color: "#EC4899",
  },
  {
    id: 3,
    title: "Interviews",
    count: 4,
    icon: FiCalendar,
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Offers",
    count: 2,
    icon: FiAward,
    color: "#10B981",
  },
  {
    id: 6,
    title: "Admin",
    icon: FiShield,
    path: "/admin/dashboard",
  },
];

// Sidebar Menu
export const sidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: FiHome,
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Jobs",
    icon: FiBriefcase,
    path: "/jobs",
  },
  {
    id: 3,
    title: "Applications",
    icon: FiFileText,
    path: "/applications",
  },
  {
    id: 4,
    title: "Saved Jobs",
    icon: FiHeart,
    path: "/saved-jobs",
  },
  {
    id: 5,
    title: "Profile",
    icon: FiUser,
    path: "/profile",
  },
  {
    id: 6,
    title: "Admin",
    icon: FiShield,
    path: "/admin/dashboard",
  },
];

// Logout
export const logoutItem = {
  id: "logout",
  title: "Logout",
  icon: FiLogOut,
  path: "/login",
};
