import { FiInbox } from "react-icons/fi";

const EmptyState = ({
  title = "No Data Found",
  message = "Nothing to display.",
}) => {
  return (
    <div className="empty-state">
      <FiInbox className="empty-icon" />

      <h2>{title}</h2>

      <p>{message}</p>
    </div>
  );
};

export default EmptyState;