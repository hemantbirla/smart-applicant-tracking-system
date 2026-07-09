import "../../styles/dashboard.css";
import ThemeToggle from "../common/ThemeToggle";

const Navbar = ({ title, onMenuClick }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={onMenuClick}>
          ☰
        </button>

        <h2>{title}</h2>
      </div>

      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
