import "../../styles/dashboard.css";

const Navbar = ({ title, onMenuClick }) => {
  return (
    <header className="navbar">
      <button className="menu-btn" onClick={onMenuClick}>
        ☰
      </button>

      <h2>{title}</h2>
    </header>
  );
};

export default Navbar;