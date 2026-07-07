import { useNavigate } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { sidebarMenu, logoutItem } from "../../constants/dashboardData";

const Sidebar = () => {
  const navigate = useNavigate();

  const LogoutIcon = logoutItem.icon;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Job</h2>
        <span>Portal</span>
      </div>

      <nav className="sidebar-menu">
        {sidebarMenu.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <LogoutIcon className="sidebar-icon" />
        <span>{logoutItem.title}</span>
      </button>
    </aside>
  );
};

export default Sidebar;
