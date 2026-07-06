import { useNavigate } from "react-router-dom";

import RecruiterSidebarItem from "./RecruiterSidebarItem";

import {
  recruiterSidebarMenu,
  recruiterLogoutItem,
} from "../../constants/recruiterSidebarData";

const RecruiterSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Recruiter Portal
      </div>

      <nav className="sidebar-menu">
        {recruiterSidebarMenu.map((item) => (
          <RecruiterSidebarItem
            key={item.id}
            item={item}
          />
        ))}
      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <recruiterLogoutItem.icon className="sidebar-icon" />
        {recruiterLogoutItem.title}
      </button>
    </aside>
  );
};

export default RecruiterSidebar;