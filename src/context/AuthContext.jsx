import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  decodeToken,
  isTokenExpired,
  getUserFromToken,
} from "../utils/token";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Initialize authentication
   */
  const initializeAuth = () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setLoading(false);
      return;
    }

    if (isTokenExpired(token)) {
      logout();
      return;
    }

    setAccessToken(token);
    setUser(getUserFromToken(token));
    setIsAuthenticated(true);
    setLoading(false);
  };

  /**
   * Login
   */
  const login = (token) => {
    localStorage.setItem("accessToken", token);

    setAccessToken(token);
    setUser(getUserFromToken(token));
    setIsAuthenticated(true);
  };

  /**
   * Logout
   */
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false);
  };

  /**
   * Refresh Token
   * API integration will be added later.
   */
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
        initializeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;