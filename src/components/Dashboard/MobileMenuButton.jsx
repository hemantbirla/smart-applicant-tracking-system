import { FiMenu } from "react-icons/fi";

const MobileMenuButton = ({ setSidebarOpen }) => {
  return (
    <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}>
      <FiMenu size={24} />
    </button>
  );
};

export default MobileMenuButton;
