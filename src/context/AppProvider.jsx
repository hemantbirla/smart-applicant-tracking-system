import React from "react";

import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AppProvider;