import ApplicationCard from "./ApplicationCard";
import recentApplications from "../../constants/recentApplications";

import "../../styles/dashboard.css";

const RecentApplications = ({ applications = recentApplications }) => {
  return (
    <section className="recent-applications">
      <h2 className="section-title">Recent Applications</h2>

      <div className="applications-list">
        {applications.map((application) => (
          <ApplicationCard key={application.id} {...application} />
        ))}
      </div>
    </section>
  );
};

export default RecentApplications;
