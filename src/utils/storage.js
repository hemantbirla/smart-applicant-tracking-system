// Storage Keys
const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const SAVED_JOBS_KEY = "savedJobs";

/**
 * Save Access Token
 */
export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = (token) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

/* -------------------- */
/* Saved Jobs Storage   */
/* -------------------- */

export const getSavedJobs = () => {
  const jobs = localStorage.getItem(SAVED_JOBS_KEY);
  return jobs ? JSON.parse(jobs) : [];
};

export const setSavedJobs = (jobs) => {
  localStorage.setItem(
    SAVED_JOBS_KEY,
    JSON.stringify(jobs)
  );
};

export const removeSavedJobs = () => {
  localStorage.removeItem(SAVED_JOBS_KEY);
};

/**
 * Clear User Session
 */
export const clearTokens = () => {
  removeAccessToken();
  removeRefreshToken();
  removeSavedJobs();
};