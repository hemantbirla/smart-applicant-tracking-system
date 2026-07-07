export const CandidateCard = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <div className="candidate-info">
        <h4>{candidate.name}</h4>
        <p>{candidate.position}</p>
      </div>

      <span className="candidate-status">
        {candidate.status}
      </span>
    </div>
  );
};

// export default CandidateCard;