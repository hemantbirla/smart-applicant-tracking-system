import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const THEME_KEY = "theme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  /**
   * Initialize theme from localStorage
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  /**
   * Apply theme whenever it changes
   */
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  /**
   * Toggle Theme
   */
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;