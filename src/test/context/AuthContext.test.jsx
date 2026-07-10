import { render, screen, act } from "@testing-library/react";

import { AuthProvider, useAuth } from "../../context/AuthContext";

import { describe, test, expect } from "vitest";

const TestComponent = () => {
  const { user, isAuthenticated, login, logout, loading } = useAuth();

  return (
    <div>
      <p data-testid="user">{user ? user.name : "No User"}</p>

      <p data-testid="auth">
        {isAuthenticated ? "Authenticated" : "Not Authenticated"}
      </p>

      <p data-testid="loading">{loading ? "Loading" : "Loaded"}</p>

      <button
        onClick={() =>
          login({
            name: "Hemant",
            role: "candidate",
          })
        }
      >
        Login
      </button>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

describe("AuthContext", () => {
  test("should provide default values", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    expect(screen.getByTestId("user")).toHaveTextContent("No User");

    expect(screen.getByTestId("auth")).toHaveTextContent("Not Authenticated");
  });

  test("should login user", async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    await act(async () => {
      screen.getByText("Login").click();
    });

    expect(screen.getByTestId("user")).toHaveTextContent("Hemant");

    expect(screen.getByTestId("auth")).toHaveTextContent("Authenticated");
  });

  test("should logout user", async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    await act(async () => {
      screen.getByText("Login").click();
    });

    await act(async () => {
      screen.getByText("Logout").click();
    });

    expect(screen.getByTestId("user")).toHaveTextContent("No User");
  });
});
