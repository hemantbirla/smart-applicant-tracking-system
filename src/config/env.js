const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,

  // Switch between Mock Data and Backend API
  USE_MOCK_API:
    import.meta.env.VITE_USE_MOCK_API === "true",
};

export default env;