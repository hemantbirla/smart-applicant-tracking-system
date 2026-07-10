import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../../routes/ProtectedRoute";

// FIXED: Changed to a default import to match standard context file exports
import AuthContext from "../../context/AuthContext";

// OPTIONAL MOCK: If your `useAuth` hook fails to read this context directly, 
// un-comment the lines below to mock the hook to return whatever context value you pass.
/*
import useAuth from "../../hooks/useAuth";
vi.mock("../../hooks/useAuth", () => ({
  default: () =>    // Adjust path based on your hook's return value
    let context = require("react").useContext(AuthContext);
    return context || { isAuthenticated: false, loading: false };
  }
}));
*/

const renderWithAuth = (authValue, initialRoute = "/dashboard") => {
  // Ensure we provide default fallback flags like 'loading' so the component doesn't break
  const fullAuthValue = { loading: false, ...authValue };

  return render(
    <AuthContext.Provider value={fullAuthValue}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <Routes>
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
          </Route>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
};

describe("Protected Route", () => {
  it("redirects unauthenticated user to login", () => {
    renderWithAuth({
      user: null,
      isAuthenticated: false,
    });

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

  it("allows authenticated user to access dashboard", () => {
    renderWithAuth({
      user: {
        name: "Hemant",
        role: "candidate",
      },
      isAuthenticated: true,
    });

    expect(screen.getByText("Dashboard Page")).toBeInTheDocument();
  });
});