import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";

import SidebarItem from "./SidebarItem";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({
  sidebarOpen,
  closeSidebar,
  title,
  subtitle,
  menu,
  logoutItem,
}) => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const LogoutIcon = logoutItem.icon;

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={closeSidebar}
      />

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <h2>{title}</h2>
            <span>{subtitle}</span>
          </div>

          <button className="sidebar-close" onClick={closeSidebar}>
            <FiX size={22} />
          </button>
        </div>

        <nav className="sidebar-menu">
          {menu.map((item) => (
            <SidebarItem
              key={item.id || item.path}
              item={item}
              onClick={closeSidebar}
            />
          ))}
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <LogoutIcon className="sidebar-icon" />
          <span>{logoutItem.title}</span>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
