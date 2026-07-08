import { useLocation } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import RecruiterSidebar from "../components/sidebar/RecruiterSidebar";
import Navbar from "../components/Navbar/Navbar";

import "../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  const isRecruiter = location.pathname.startsWith("/recruiter");

  return (
    <div className="dashboard-layout">
      {isRecruiter ? (
        <RecruiterSidebar />
      ) : (
        <Sidebar />
      )}

      <div className="dashboard-content">
        <Navbar
          title={
            isRecruiter
              ? "Recruiter Dashboard"
              : "Candidate Dashboard"
          }
        />

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;