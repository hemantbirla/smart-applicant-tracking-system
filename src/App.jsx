import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import ApplicationHistory from "./pages/ApplicationHistory/ApplicationHistory";
import SavedJobs from "./pages/SavedJobs/SavedJobs";

import RecruiterDashboard from "./pages/RecruiterDashboard/RecruiterDashboard";
import RecruiterLayout from "./layouts/RecruiterLayout";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Candidate Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Jobs */}
        <Route path="/jobs" element={<Jobs />} />

        {/* Job Details */}
        <Route path="/jobs/:id" element={<JobDetails />} />

        {/* Application History */}
        <Route path="/applications" element={<ApplicationHistory />} />

        {/* Saved Jobs */}
        <Route path="/saved-jobs" element={<SavedJobs />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100vh",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              404 - Page Not Found
            </div>
          }
        />

        {/* RecruiterDashboard */}
        {/* ================= Recruiter ================= */}

        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />

        <Route
          path="/recruiter/jobs"
          element={
            <RecruiterLayout>
              <h2>Manage Jobs</h2>
            </RecruiterLayout>
          }
        />

        <Route
          path="/recruiter/jobs/new"
          element={
            <RecruiterLayout>
              <h2>Post New Job</h2>
            </RecruiterLayout>
          }
        />

        <Route
          path="/recruiter/applications"
          element={
            <RecruiterLayout>
              <h2>Applications</h2>
            </RecruiterLayout>
          }
        />

        <Route
          path="/recruiter/candidates"
          element={
            <RecruiterLayout>
              <h2>Candidates</h2>
            </RecruiterLayout>
          }
        />

        <Route
          path="/recruiter/interviews"
          element={
            <RecruiterLayout>
              <h2>Interviews</h2>
            </RecruiterLayout>
          }
        />

        <Route
          path="/recruiter/company"
          element={
            <RecruiterLayout>
              <h2>Company Profile</h2>
            </RecruiterLayout>
          }
        />

        <Route
          path="/recruiter/reports"
          element={
            <RecruiterLayout>
              <h2>Reports</h2>
            </RecruiterLayout>
          }
        />

        <Route
          path="/recruiter/settings"
          element={
            <RecruiterLayout>
              <h2>Settings</h2>
            </RecruiterLayout>
          }
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
