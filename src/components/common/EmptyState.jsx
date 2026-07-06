import { FiInbox } from "react-icons/fi";

const EmptyState = ({
  title,
  description,
}) => {
  return (
    <div className="empty-state">
      <FiInbox size={60} />

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default EmptyState;