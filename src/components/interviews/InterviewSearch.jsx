import "../../styles/interview.css";

const InterviewSearch = ({
  searchTerm,
  onSearch,
}) => {
  return (
    <div className="interview-search">
      <input
        type="text"
        placeholder="Search candidate, job or interviewer..."
        value={searchTerm}
        onChange={(e) =>
          onSearch(e.target.value)
        }
      />
    </div>
  );
};

export default InterviewSearch;