import { useLocation } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import RecruiterSidebar from "../components/sidebar/RecruiterSidebar";
import AdminSidebar from "../components/sidebar/AdminSidebar";

import Navbar from "../components/Navbar/Navbar";

import "../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  const isRecruiter =
    location.pathname.startsWith("/recruiter");

  const isAdmin =
    location.pathname.startsWith("/admin");

  const getTitle = () => {
    if (isAdmin) return "Admin Dashboard";

    if (isRecruiter)
      return "Recruiter Dashboard";

    return "Candidate Dashboard";
  };

  return (
    <div className="dashboard-layout">
      {isAdmin ? (
        <AdminSidebar />
      ) : isRecruiter ? (
        <RecruiterSidebar />
      ) : (
        <Sidebar />
      )}

      <div className="dashboard-content">
        <Navbar title={getTitle()} />

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;