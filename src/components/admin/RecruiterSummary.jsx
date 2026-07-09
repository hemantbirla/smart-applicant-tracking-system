const RecruiterSummary = ({ data }) => {
  return (
    <div className="admin-section-card">
      <h2 className="admin-section-title">
        Recruiter Summary
      </h2>

      <div className="summary-list">
        <div className="summary-item">
          <span>Verified Recruiters</span>
          <strong>{data.verified}</strong>
        </div>

        <div className="summary-item">
          <span>Pending Verification</span>
          <strong>{data.pending}</strong>
        </div>

        <div className="summary-item">
          <span>Blocked Recruiters</span>
          <strong>{data.blocked}</strong>
        </div>

        <div className="summary-item">
          <span>Top Recruiter</span>
          <strong>{data.topRecruiter}</strong>
        </div>
      </div>
    </div>
  );
};

export default RecruiterSummary;