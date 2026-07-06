import useApplications from "../../hooks/useApplications";

import ApplicationCard from "../application/ApplicationCard";

const RecentApplications = () => {
  const { applications, loading } =
    useApplications();

  if (loading) {
    return <p>Loading applications...</p>;
  }

  return (
    <section className="dashboard-section">
      <h2 className="dashboard-title">
        Recent Applications
      </h2>

      {applications
        .slice(0, 5)
        .map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
          />
        ))}
    </section>
  );
};

export default RecentApplications;