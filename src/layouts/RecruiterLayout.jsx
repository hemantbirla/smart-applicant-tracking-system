import RecruiterSidebar from "../components/sidebar/RecruiterSidebar";

const RecruiterLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <RecruiterSidebar />

      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
};

export default RecruiterLayout;