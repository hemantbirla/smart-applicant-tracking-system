import {
  dashboardStatistics,
  userSummary,
  recruiterSummary,
  jobSummary,
  applicationSummary,
  recentActivities,
  topCompanies,
  systemHealth,
} from "../constants/adminDashboardData";

// ===============================
// Dashboard Statistics
// ===============================
export const getDashboardStatistics = async () => {
  return Promise.resolve(dashboardStatistics);
};

// ===============================
// User Summary
// ===============================
export const getUsersSummary = async () => {
  return Promise.resolve(userSummary);
};

// ===============================
// Recruiter Summary
// ===============================
export const getRecruitersSummary = async () => {
  return Promise.resolve(recruiterSummary);
};

// ===============================
// Job Summary
// ===============================
export const getJobsSummary = async () => {
  return Promise.resolve(jobSummary);
};

// ===============================
// Application Summary
// ===============================
export const getApplicationSummary = async () => {
  return Promise.resolve(applicationSummary);
};

// ===============================
// Recent Activities
// ===============================
export const getRecentActivities = async () => {
  return Promise.resolve(recentActivities);
};

// ===============================
// Top Companies
// ===============================
export const getTopCompanies = async () => {
  return Promise.resolve(topCompanies);
};

// ===============================
// System Health
// ===============================
export const getSystemHealth = async () => {
  return Promise.resolve(systemHealth);
};