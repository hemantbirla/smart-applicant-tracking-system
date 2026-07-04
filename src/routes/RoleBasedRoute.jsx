import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RoleBasedRoute = ({ roles = [], children }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Wait until auth initialization completes
  if (loading) {
    return <div>Loading...</div>;
  }

  // User is not logged in
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // User role not allowed
  if (!roles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User has permission
  return children;
};

export default RoleBasedRoute;