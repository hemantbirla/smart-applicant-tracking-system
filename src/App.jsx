import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import Dashboard from "./pages/Dashboard/Dashboard";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import Profile from "./pages/Profile/Profile";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        {/* Redirect */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Jobs */}
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/jobs/:jobId"
          element={<JobDetails />}
        />

        {/* Candidate */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Temporary Pages */}
        <Route
          path="/applications"
          element={
            <h2 style={{ padding: 30 }}>
              Applications Page
            </h2>
          }
        />

        <Route
          path="/saved-jobs"
          element={
            <h2 style={{ padding: 30 }}>
              Saved Jobs Page
            </h2>
          }
        />

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
      />
    </>
  );
}

export default App;