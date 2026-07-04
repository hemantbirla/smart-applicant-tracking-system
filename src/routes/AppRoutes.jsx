import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Jobs from "../pages/Jobs/Jobs";

import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* ========================= */}
      {/* Public Routes */}
      {/* ========================= */}

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

      {/* ========================= */}
      {/* Protected Routes */}
      {/* ========================= */}

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/jobs" element={<Jobs />} />
      </Route>

      {/* ========================= */}
      {/* Admin Routes */}
      {/* ========================= */}

      <Route element={<AdminRoute />}>
        <Route path="/users" element={<Users />} />

        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* ========================= */}
      {/* 404 */}
      {/* ========================= */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;