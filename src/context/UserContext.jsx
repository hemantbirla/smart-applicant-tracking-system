import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User State
  // const [profile, setProfileState] = useState(null);
  // Mock Data
  const [profile, setProfileState] = useState({
    firstName: "Hemant",
    lastName: "Birla",
    title: "React Developer",
    email: "hemant@example.com",
    phone: "+91 9876543210",
    dob: "1998-05-15",
    location: "Pune, India",
    linkedin: "https://linkedin.com/in/hemantbirla",
    github: "https://github.com/hemantbirla",
    portfolio: "https://hemantbirla.dev",

    skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Node.js"],

    experience: [
      {
        company: "Samsung SDS",
        designation: "Software Engineer",
        duration: "Jul 2022 - Present",
      },
    ],

    education: [
      {
        degree: "B.E. Computer Engineering",
        college: "XYZ University",
        year: "2022",
      },
    ],

    avatar:
      "https://ui-avatars.com/api/?name=Hemant+Birla&background=2563eb&color=fff",

    role: "candidate",

    preferences: {},

    permissions: [],
  });
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
