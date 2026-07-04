import "../../styles/dashboard.css";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="navbar">
      <button className="menu-btn" onClick={onMenuClick}>
        ☰
      </button>

      <h2>Candidate Dashboard</h2>
    </header>
  );
};

export default Navbar;
