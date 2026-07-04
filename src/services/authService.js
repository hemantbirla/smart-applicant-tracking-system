import axiosInstance from "../api/axios";

/**
 * Login User
 * @param {Object} data
 * @returns {Promise}
 */
export const login = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

/**
 * Register User
 * @param {Object} data
 * @returns {Promise}
 */
export const signup = async (data) => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response.data;
};

/**
 * Logout User
 * @returns {Promise}
 */
export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

/**
 * Refresh Access Token
 * @param {string} refreshToken
 * @returns {Promise}
 */
export const refreshToken = async (refreshToken) => {
  const response = await axiosInstance.post("/auth/refresh-token", {
    refreshToken,
  });

  return response.data;
};