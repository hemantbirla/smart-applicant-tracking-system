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
      <div className="sidebar-logo">Recruiter Portal</div>

      <nav className="sidebar-menu">
        {recruiterSidebarMenu.map((item) => (
          <RecruiterSidebarItem key={item.id} item={item} />
        ))}
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <recruiterLogoutItem.icon className="sidebar-icon" />

        {recruiterLogoutItem.title}
      </button>
      <Route
        path="/recruiter/jobs"
        element={
          <RecruiterLayout>
            <h2>Jobs Page</h2>
          </RecruiterLayout>
        }
      />

      <Route
        path="/recruiter/applications"
        element={
          <RecruiterLayout>
            <h2>Applications Page</h2>
          </RecruiterLayout>
        }
      />

      <Route
        path="/recruiter/candidates"
        element={
          <RecruiterLayout>
            <h2>Candidates Page</h2>
          </RecruiterLayout>
        }
      />

      <Route
        path="/recruiter/interviews"
        element={
          <RecruiterLayout>
            <h2>Interviews Page</h2>
          </RecruiterLayout>
        }
      />

      <Route
        path="/recruiter/company"
        element={
          <RecruiterLayout>
            <h2>Company Page</h2>
          </RecruiterLayout>
        }
      />

      <Route
        path="/recruiter/reports"
        element={
          <RecruiterLayout>
            <h2>Reports Page</h2>
          </RecruiterLayout>
        }
      />

      <Route
        path="/recruiter/settings"
        element={
          <RecruiterLayout>
            <h2>Settings Page</h2>
          </RecruiterLayout>
        }
      />
    </aside>
  );
};

export default RecruiterSidebar;
