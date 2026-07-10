import "./Error.css";

const ErrorFallback = ({
  title = "Something went wrong",
  message = "An unexpected error occurred.",
  onRetry,
}) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>

      <h2 className="error-title">{title}</h2>

      <p className="error-message">{message}</p>

      {onRetry && (
        <button className="error-btn" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorFallback;
