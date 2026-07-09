import {
  FiMoon,
  FiSun,
} from "react-icons/fi";

import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <FiMoon />
          Dark
        </>
      ) : (
        <>
          <FiSun />
          Light
        </>
      )}
    </button>
  );
};

export default ThemeToggle;