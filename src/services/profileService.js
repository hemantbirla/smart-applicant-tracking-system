// Mock Profile Data
const mockProfile = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "+91 9876543210",
  location: "Bangalore",
  title: "Frontend Developer",
  bio: "Passionate React Developer",
  avatar: "",
  role: "candidate",
  preferences: {
    theme: "light",
    notifications: true,
  },
  permissions: ["read_profile", "edit_profile"],
};

/**
 * Get User Profile
 * Later:
 * GET /profile
 */
export const getProfile = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProfile);
    }, 500);
  });
};

/**
 * Update User Profile
 * Later:
 * PUT /profile
 */
export const updateProfile = async (updatedData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.assign(mockProfile, updatedData);
      resolve(mockProfile);
    }, 500);
  });
};