import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import RecruiterSidebar from "../components/sidebar/RecruiterSidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  // Checks if the current URL path contains "/recruiter"
  const isRecruiter = location.pathname.includes("/recruiter");

  return (
    <div className="dashboard-layout">
      {/* 1. Render the correct Sidebar */}
      {isRecruiter ? <RecruiterSidebar /> : <Sidebar />}

      <div className="dashboard-content">
        {/* 2. Dynamically set the Navbar title */}
        <Navbar title={isRecruiter ? "Recruiter Dashboard" : "Candidate Dashboard"} />

        {/* 3. Wrap content inside main tag if it's the recruiter view */}
        {isRecruiter ? (
          <main className="dashboard-main">{children}</main>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;