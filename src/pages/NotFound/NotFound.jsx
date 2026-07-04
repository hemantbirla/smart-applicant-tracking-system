import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <Link to="/login">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;