import "./Loader.css";

const Loader = ({
  size = "medium",
  message = "Loading...",
  fullscreen = false,
}) => {
  return (
    <div
      className={`loader-container ${
        fullscreen ? "fullscreen" : ""
      }`}
    >
      <div className={`spinner ${size}`}></div>

      {message && (
        <p className="loader-message">
          {message}
        </p>
      )}
    </div>
  );
};

export default Loader;