import { NavLink } from "react-router-dom";

const RecruiterSidebarItem = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "sidebar-item active"
          : "sidebar-item"
      }
    >
      <item.icon className="sidebar-icon" />

      <span>{item.title}</span>
    </NavLink>
  );
};

export default RecruiterSidebarItem;