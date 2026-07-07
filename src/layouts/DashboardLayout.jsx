import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar title="Candidate Dashboard" />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
