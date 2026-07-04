import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

const Unauthorized = () => {
  return (
    <div className="auth-container">
      <div className="auth-card unauthorized-card">
        <h1 className="unauthorized-code">403</h1>

        <h2 className="unauthorized-title">
          Unauthorized
        </h2>

        <p className="unauthorized-message">
          You don't have permission
          <br />
          to access this page.
        </p>

        <Link to="/dashboard" className="auth-button unauthorized-btn">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;