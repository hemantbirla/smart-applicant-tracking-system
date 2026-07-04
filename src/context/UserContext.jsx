import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User State
  const [profile, setProfileState] = useState(null);
  const [role, setRole] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [preferences, setPreferences] = useState({});
  const [permissions, setPermissions] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(false);

  /**
   * Set complete user profile
   */
  const setProfile = (userData) => {
    if (!userData) return;

    setProfileState(userData);
    setRole(userData.role || null);
    setAvatar(userData.avatar || null);
    setPreferences(userData.preferences || {});
    setPermissions(userData.permissions || []);
  };

  /**
   * Update existing profile
   */
  const updateProfile = (updatedData) => {
    setProfileState((prev) => {
      if (!prev) return updatedData;

      const updatedProfile = {
        ...prev,
        ...updatedData,
      };

      setRole(updatedProfile.role || null);
      setAvatar(updatedProfile.avatar || null);
      setPreferences(updatedProfile.preferences || {});
      setPermissions(updatedProfile.permissions || []);

      return updatedProfile;
    });
  };

  /**
   * Clear profile
   */
  const clearProfile = () => {
    setProfileState(null);
    setRole(null);
    setAvatar(null);
    setPreferences({});
    setPermissions([]);
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        // State
        profile,
        role,
        avatar,
        preferences,
        permissions,
        loading,

        // Actions
        setProfile,
        updateProfile,
        clearProfile,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom Hook
 */
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserContext;