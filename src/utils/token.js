import { jwtDecode } from "jwt-decode";

/**
 * Decode JWT token
 * @param {string} token
 * @returns {object|null}
 */
export const decodeToken = (token) => {
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

/**
 * Check whether a JWT token has expired
 * @param {string} token
 * @returns {boolean}
 */
export const isTokenExpired = (token) => {
  const decoded = decodeToken(token);

  if (!decoded || !decoded.exp) {
    return true;
  }

  const currentTime = Date.now() / 1000;

  return decoded.exp < currentTime;
};

/**
 * Extract user information from JWT
 * @param {string} token
 * @returns {object|null}
 */
export const getUserFromToken = (token) => {
  const decoded = decodeToken(token);

  if (!decoded) return null;

  return {
    id: decoded.id || decoded.userId || decoded.sub,
    name: decoded.name,
    email: decoded.email,
    role: decoded.role,
  };
};