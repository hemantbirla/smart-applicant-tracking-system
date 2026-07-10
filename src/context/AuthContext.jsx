import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ==========================
  // State
  // ==========================

  const [user, setUser] = useState(null);

  const [accessToken, setAccessToken] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [loading, setLoading] = useState(true);

  // ==========================
  // Initialize Authentication
  // ==========================

  const initializeAuth = () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setAccessToken(token);

      setUser({
        id: 1,
        name: "Hemant Birla",
        email: "hemant@example.com",
        role: "candidate",
      });

      setIsAuthenticated(true);
    }

    setLoading(false);
  };

  // ==========================
  // Login
  // ==========================

  const login = (token) => {
    localStorage.setItem("accessToken", token);

    setAccessToken(token);

    setUser({
      id: 1,
      name: "Hemant Birla",
      email: "hemant@example.com",
      role: "candidate",
    });

    setIsAuthenticated(true);

    setLoading(false);
  };

  // ==========================
  // Logout
  // ==========================

  const logout = () => {
    localStorage.removeItem("accessToken");

    setAccessToken(null);

    setUser(null);

    setIsAuthenticated(false);

    setLoading(false);
  };

  // ==========================
  // Refresh Token (Future API)
  // ==========================

  const refreshToken = async () => {
    console.log("Refresh Token API will be added later.");
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isAuthenticated,
        loading,
        login,
        logout,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ==========================
// Custom Hook
// ==========================

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
