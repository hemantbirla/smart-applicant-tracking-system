import { FiAlertCircle } from "react-icons/fi";

const ErrorState = ({
  title = "Something went wrong",
  message = "Please try again later.",
  onRetry,
}) => {
  return (
    <div className="error-state">
      <FiAlertCircle className="error-icon" />

      <h2>{title}</h2>

      <p>{message}</p>

      {onRetry && (
        <button
          className="primary-btn"
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorState;