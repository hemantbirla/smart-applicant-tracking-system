import React from "react";
import "../../styles/auth.css";

const AuthButton = ({
  children,
  type = "button",
  disabled = false,
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`auth-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default AuthButton;