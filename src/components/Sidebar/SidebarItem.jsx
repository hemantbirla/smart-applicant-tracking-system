import { memo } from "react";

import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, onClick }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? "sidebar-link active" : "sidebar-link"
      }
    >
      <Icon className="sidebar-icon" />

      <span>{item.title}</span>
    </NavLink>
  );
};

export default memo(SidebarItem);
