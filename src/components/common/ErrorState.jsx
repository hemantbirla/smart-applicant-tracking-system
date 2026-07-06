import { FiAlertTriangle } from "react-icons/fi";

const ErrorState = ({ message }) => {
  return (
    <div className="error-state">
      <FiAlertTriangle size={50} />

      <h3>Something went wrong</h3>

      <p>{message}</p>
    </div>
  );
};

export default ErrorState;