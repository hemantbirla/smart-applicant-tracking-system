import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = ({
  title,
  subtitle,
  menu,
  logoutItem,
}) => {
  const navigate = useNavigate();

  const LogoutIcon = logoutItem.icon;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>

      <nav className="sidebar-menu">
        {menu.map((item) => (
          <SidebarItem
            key={item.id || item.path}
            item={item}
          />
        ))}
      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <LogoutIcon className="sidebar-icon" />
        <span>{logoutItem.title}</span>
      </button>
    </aside>
  );
};

export default Sidebar;