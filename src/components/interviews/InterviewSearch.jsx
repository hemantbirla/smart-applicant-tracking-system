import "../../styles/interview.css";

const InterviewSearch = ({
  search = "",
  onSearch = () => {},
}) => {
  return (
    <div className="interview-search">
      <input
        type="text"
        placeholder="Search candidate, job or interviewer..."
        value={search}
        onChange={(e) =>
          onSearch(e.target.value)
        }
      />
    </div>
  );
};

export default InterviewSearch;