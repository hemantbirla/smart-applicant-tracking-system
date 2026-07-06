import { NavLink } from "react-router-dom";

const RecruiterSidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "sidebar-item active"
          : "sidebar-item"
      }
    >
      <Icon className="sidebar-icon" />
      <span>{item.title}</span>
    </NavLink>
  );
};

export default RecruiterSidebarItem;