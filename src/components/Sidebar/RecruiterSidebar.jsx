import { useNavigate } from "react-router-dom";

import RecruiterSidebarItem from "./RecruiterSidebarItem";

import {
  recruiterSidebarMenu,
  recruiterLogoutItem,
} from "../../constants/recruiterSidebarData";

const RecruiterSidebar = () => {
  const navigate = useNavigate();

  // React component references must start with a capital letter to compile correctly
  const LogoutIcon = recruiterLogoutItem.icon;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Recruiter</h2>
        <span>Portal</span>
      </div>

      <nav className="sidebar-menu">
        {recruiterSidebarMenu.map((item) => (
          <RecruiterSidebarItem key={item.id} item={item} />
        ))}
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <LogoutIcon className="sidebar-icon" />
        <span>{recruiterLogoutItem.title}</span>
      </button>
    </aside>
  );
};

export default RecruiterSidebar;
