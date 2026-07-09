import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "sidebar-link active"
          : "sidebar-link"
      }
    >
      <Icon className="sidebar-icon" />
      <span>{item.title}</span>
    </NavLink>
  );
};

export default SidebarItem;