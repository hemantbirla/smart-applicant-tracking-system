// ===============================
// React
// ===============================

import { lazy, Suspense } from "react";

// ===============================
// React Router
// ===============================

import { Routes, Route, Navigate } from "react-router-dom";

// ===============================
// Layouts
// ===============================

import DashboardLayout from "../layouts/DashboardLayout";

// ===============================
// Route Guards
// ===============================

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

// ===============================
// Common Components
// ===============================

import Loader from "../components/common/Loader/Loader";

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

// ===============================
// Authentication Pages
// ===============================

const Login = lazy(() => import("../pages/Login/Login"));

const Signup = lazy(() => import("../pages/Signup/Signup"));

const ForgotPassword = lazy(
  () => import("../pages/ForgotPassword/ForgotPassword"),
);

const ResetPassword = lazy(
  () => import("../pages/ResetPassword/ResetPassword"),
);

// ===============================
// Candidate Pages
// ===============================

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

const Profile = lazy(() => import("../pages/Profile/Profile"));

const Jobs = lazy(() => import("../pages/Jobs/Jobs"));

const JobDetails = lazy(() => import("../pages/JobDetails/JobDetails"));

const SavedJobs = lazy(() => import("../pages/SavedJobs/SavedJobs"));

const ApplicationHistory = lazy(
  () => import("../pages/ApplicationHistory/ApplicationHistory"),
);

// ===============================
// Recruiter Pages
// ===============================

const RecruiterDashboard = lazy(
  () => import("../pages/RecruiterDashboard/RecruiterDashboard"),
);

const ManageJobs = lazy(() => import("../pages/recruiter/ManageJobs"));

const AddJob = lazy(() => import("../pages/recruiter/AddJob"));

const EditJob = lazy(() => import("../pages/recruiter/EditJob"));

const ViewJob = lazy(() => import("../pages/recruiter/ViewJob"));

const Applicants = lazy(() => import("../pages/Applicants/Applicants"));

const Interviews = lazy(() => import("../pages/Interviews/Interviews"));

// ===============================
// Admin Pages
// ===============================

const AdminDashboard = lazy(
  () => import("../pages/AdminDashboard/AdminDashboard"),
);

// const Users = lazy(() => import("../pages/Users/Users"));
// const Recruiters = lazy(() => import("../pages/Recruiters/Recruiters"));
// const Reports = lazy(() => import("../pages/Reports/Reports"));
// const Companies = lazy(() => import("../pages/Companies/Companies"));
// const Settings = lazy(() => import("../pages/Settings/Settings"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader fullscreen message="Loading..." />}>
      <Routes>
        {/* ================= Default ================= */}

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* ================= Authentication ================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        {/* ================= Candidate ================= */}

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/jobs/:id" element={<JobDetails />} />

          <Route path="/applications" element={<ApplicationHistory />} />

          <Route path="/saved-jobs" element={<SavedJobs />} />
        </Route>

        {/* ================= Recruiter ================= */}

        <Route element={<ProtectedRoute />}>
          <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />

          <Route path="/recruiter/jobs" element={<ManageJobs />} />

          <Route path="/recruiter/jobs/add" element={<AddJob />} />

          <Route path="/recruiter/jobs/edit/:id" element={<EditJob />} />

          <Route path="/recruiter/jobs/:id" element={<ViewJob />} />

          <Route path="/recruiter/applicants" element={<Applicants />} />

          <Route path="/recruiter/interviews" element={<Interviews />} />

          <Route
            path="/recruiter/applications"
            element={
              <DashboardLayout>
                <h2>Applications</h2>
              </DashboardLayout>
            }
          />

          <Route
            path="/recruiter/company"
            element={
              <DashboardLayout>
                <h2>Company Profile</h2>
              </DashboardLayout>
            }
          />

          <Route
            path="/recruiter/reports"
            element={
              <DashboardLayout>
                <h2>Reports</h2>
              </DashboardLayout>
            }
          />

          <Route
            path="/recruiter/settings"
            element={
              <DashboardLayout>
                <h2>Settings</h2>
              </DashboardLayout>
            }
          />
        </Route>

        {/* ================= Admin ================= */}

        <Route element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Future Admin Routes */}

          {/* <Route path="/admin/users" element={<Users />} /> */}

          {/* <Route path="/admin/recruiters" element={<Recruiters />} /> */}

          {/* <Route path="/admin/jobs" element={<Jobs />} /> */}

          {/* <Route path="/admin/reports" element={<Reports />} /> */}

          {/* <Route path="/admin/companies" element={<Companies />} /> */}

          {/* <Route path="/admin/settings" element={<Settings />} /> */}
        </Route>

        {/* ================= 404 ================= */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
