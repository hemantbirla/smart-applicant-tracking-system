import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import Loader from "../components/common/Loader/Loader";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loader fullscreen message="Checking authentication..." />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
