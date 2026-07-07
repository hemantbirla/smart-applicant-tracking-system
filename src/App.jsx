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

import ManageJobs from "./pages/recruiter/ManageJobs";
import AddJob from "./pages/recruiter/AddJob";
import EditJob from "./pages/recruiter/EditJob";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* ================= Authentication ================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        {/* ================= Candidate ================= */}

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="/applications" element={<ApplicationHistory />} />

        <Route path="/saved-jobs" element={<SavedJobs />} />

        {/* ================= Recruiter Dashboard ================= */}

        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />

        {/* ================= Recruiter Jobs ================= */}

        <Route path="/recruiter/jobs" element={<ManageJobs />} />

        <Route path="/recruiter/jobs/add" element={<AddJob />} />

        <Route path="/recruiter/jobs/edit/:id" element={<EditJob />} />

        <Route
          path="/recruiter/jobs/new"
          element={
            <RecruiterLayout>
              <h2>Post New Job</h2>
            </RecruiterLayout>
          }
        />

        {/* ================= Recruiter Applications ================= */}

        <Route
          path="/recruiter/applications"
          element={
            <RecruiterLayout>
              <h2>Applications</h2>
            </RecruiterLayout>
          }
        />

        {/* ================= Recruiter Candidates ================= */}

        <Route
          path="/recruiter/candidates"
          element={
            <RecruiterLayout>
              <h2>Candidates</h2>
            </RecruiterLayout>
          }
        />

        {/* ================= Recruiter Interviews ================= */}

        <Route
          path="/recruiter/interviews"
          element={
            <RecruiterLayout>
              <h2>Interviews</h2>
            </RecruiterLayout>
          }
        />

        {/* ================= Recruiter Company ================= */}

        <Route
          path="/recruiter/company"
          element={
            <RecruiterLayout>
              <h2>Company Profile</h2>
            </RecruiterLayout>
          }
        />

        {/* ================= Recruiter Reports ================= */}

        <Route
          path="/recruiter/reports"
          element={
            <RecruiterLayout>
              <h2>Reports</h2>
            </RecruiterLayout>
          }
        />

        {/* ================= Recruiter Settings ================= */}

        <Route
          path="/recruiter/settings"
          element={
            <RecruiterLayout>
              <h2>Settings</h2>
            </RecruiterLayout>
          }
        />

        {/* ================= 404 ================= */}

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
