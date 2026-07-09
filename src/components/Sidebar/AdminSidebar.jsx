import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Briefcase,
  FileText,
  BarChart3,
  Building2,
  Settings,
  ShieldCheck,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    title: "Recruiters",
    path: "/admin/recruiters",
    icon: UserCheck,
  },
  {
    title: "Jobs",
    path: "/admin/jobs",
    icon: Briefcase,
  },
  {
    title: "Applications",
    path: "/admin/applications",
    icon: FileText,
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "Companies",
    path: "/admin/companies",
    icon: Building2,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

const AdminSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>ATS</h2>
        <span>Admin Panel</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-link logout-btn">
          <LogOut size={20} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;