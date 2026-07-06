import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const SaveJobButton = ({ saved, onToggle }) => {
  return (
    <button
      className={`save-job-btn ${saved ? "saved" : ""}`}
      onClick={onToggle}
      aria-label="Save Job"
    >
      {saved ? <FaHeart /> : <FiHeart />}
    </button>
  );
};

export default SaveJobButton;