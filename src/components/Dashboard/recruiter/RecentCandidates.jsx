import {CandidateCard} from "./CandidateCard";
import { recentCandidates } from "../../../constants/recruiterDashboardData";

const RecentCandidates = () => {
  return (
    <section className="dashboard-section">
      <h2 className="section-title">
        Latest Applications
      </h2>

      <div className="candidate-list">
        {recentCandidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentCandidates;