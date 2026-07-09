// src/constants/sidebarConfig.js

import {
  sidebarMenu,
  logoutItem,
} from "./dashboardData";

import {
  recruiterSidebarMenu,
  recruiterLogoutItem,
} from "./recruiterDashboardData";

import {
  adminSidebarMenu,
  adminLogoutItem,
} from "./adminDashboardData";

export const candidateSidebar = {
  title: "Job",
  subtitle: "Portal",
  menu: sidebarMenu,
  logoutItem,
};

export const recruiterSidebar = {
  title: "Recruiter",
  subtitle: "Portal",
  menu: recruiterSidebarMenu,
  logoutItem: recruiterLogoutItem,
};

export const adminSidebar = {
  title: "ATS",
  subtitle: "Admin Panel",
  menu: adminSidebarMenu,
  logoutItem: adminLogoutItem,
};