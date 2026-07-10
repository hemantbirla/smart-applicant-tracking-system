// Storage Keys
const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const SAVED_JOBS_KEY = "savedJobs";

/* -------------------- */
/* Generic Base Helpers */
/* -------------------- */
export const setStorage = (key, value) => {
  const stringValue = typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(key, stringValue);
};

export const getStorage = (key) => {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch {
    return data; // Return raw string if it isn't JSON stringified
  }
};

export const removeStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};

/* -------------------- */
/* Token Specific       */
/* -------------------- */
export const setAccessToken = (token) => setStorage(ACCESS_TOKEN_KEY, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY); // Keeps original behavior
export const setRefreshToken = (token) => setStorage(REFRESH_TOKEN_KEY, token);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const removeAccessToken = () => removeStorage(ACCESS_TOKEN_KEY);
export const removeRefreshToken = () => removeStorage(REFRESH_TOKEN_KEY);

/* -------------------- */
/* Saved Jobs Storage   */
/* -------------------- */
export const getSavedJobs = () => {
  const jobs = localStorage.getItem(SAVED_JOBS_KEY);
  return jobs ? JSON.parse(jobs) : [];
};

export const setSavedJobs = (jobs) => {
  setStorage(SAVED_JOBS_KEY, jobs);
};

export const removeSavedJobs = () => {
  removeStorage(SAVED_JOBS_KEY);
};

/**
 * Clear User Session
 */
export const clearTokens = () => {
  removeAccessToken();
  removeRefreshToken();
  removeSavedJobs();
};