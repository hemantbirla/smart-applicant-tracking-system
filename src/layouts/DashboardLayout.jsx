import { useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import {
  candidateSidebar,
  recruiterSidebar,
  adminSidebar,
} from "../constants/sidebarConfig";

const DashboardLayout = ({ children }) => {
  const { pathname } = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  let sidebarConfig = candidateSidebar;
  let title = "Candidate Dashboard";

  if (pathname.startsWith("/recruiter")) {
    sidebarConfig = recruiterSidebar;
    title = "Recruiter Dashboard";
  } else if (pathname.startsWith("/admin")) {
    sidebarConfig = adminSidebar;
    title = "Admin Dashboard";
  }

  return (
    <div className="dashboard-layout">
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
        title={sidebarConfig.title}
        subtitle={sidebarConfig.subtitle}
        menu={sidebarConfig.menu}
        logoutItem={sidebarConfig.logoutItem}
      />

      <div className="dashboard-content">
        <Navbar
          title={title}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="dashboard-main">
          <div className="container">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;