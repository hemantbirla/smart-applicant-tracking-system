import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfileState] = useState(null);
  const [role, setRole] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [preferences, setPreferences] = useState({});
  const [permissions, setPermissions] = useState([]);

  /**
   * Set complete profile
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
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        role,
        avatar,
        preferences,
        permissions,

        setProfile,
        updateProfile,
        clearProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;