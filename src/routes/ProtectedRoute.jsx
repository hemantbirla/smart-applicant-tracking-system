import { Navigate } from "react-router-dom";

const isAuthenticated = false;

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;


// Note: Will replace the hardcoded isAuthenticated value with actual authentication logic when implement login.