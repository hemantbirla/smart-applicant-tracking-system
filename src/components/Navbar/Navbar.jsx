import { memo } from "react";
import { FiMenu } from "react-icons/fi";

import ThemeToggle from "../common/ThemeToggle";

import "../../styles/dashboard.css";

const Navbar = ({ title, onMenuClick }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          className="menu-btn"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          <FiMenu size={24} />
        </button>

        <h2>{title}</h2>
      </div>

      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default memo(Navbar);
