import { useLocation } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

import {
  candidateSidebar,
  recruiterSidebar,
  adminSidebar,
} from "../constants/sidebarConfig";

import Navbar from "../components/Navbar/Navbar";

const DashboardLayout = ({ children }) => {
  const { pathname } = useLocation();

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
        title={sidebarConfig.title}
        subtitle={sidebarConfig.subtitle}
        menu={sidebarConfig.menu}
        logoutItem={sidebarConfig.logoutItem}
      />

      <div className="dashboard-content">
        <Navbar title={title} />

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;