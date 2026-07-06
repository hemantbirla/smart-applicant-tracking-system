import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { SavedJobsProvider } from "./SavedJobsContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <UserProvider>
          <SavedJobsProvider>
            {children}
          </SavedJobsProvider>
        </UserProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AppProvider;