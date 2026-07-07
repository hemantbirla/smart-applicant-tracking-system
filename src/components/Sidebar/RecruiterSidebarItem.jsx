import { NavLink } from "react-router-dom";

const RecruiterSidebarItem = ({ item }) => {
  // React components must be capitalized to render correctly
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

export default RecruiterSidebarItem;