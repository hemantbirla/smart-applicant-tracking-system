import Navbar from "../components/Navbar/Navbar";
import RecruiterSidebar from "../components/sidebar/RecruiterSidebar";

const RecruiterLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <RecruiterSidebar />

      <div className="dashboard-content">
        <Navbar title="Recruiter Dashboard" />

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RecruiterLayout;