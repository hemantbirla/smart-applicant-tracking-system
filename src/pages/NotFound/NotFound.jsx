import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "70px" }}>404</h1>

      <h2>Page Not Found</h2>

      <Link
        to="/dashboard"
        style={{
          padding: "12px 24px",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
