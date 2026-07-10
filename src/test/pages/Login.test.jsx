import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Login from "../../pages/Login/Login";

// ----------------------
// Mock useNavigate
// ----------------------

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// ----------------------
// Mock useAuth
// ----------------------

const mockLogin = vi.fn();

vi.mock("../../hooks/useAuth", () => ({
  default: () => ({
    login: mockLogin,
  }),
}));

const renderLogin = () =>
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

describe("Login Page", () => {
  it("renders login page", () => {
    renderLogin();

    expect(
      screen.getByText(/welcome back/i)
    ).toBeInTheDocument();
  });

  it("renders email input", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText(/enter your email/i)
    ).toBeInTheDocument();
  });

  it("renders password input", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText(/enter your password/i)
    ).toBeInTheDocument();
  });

  it("renders login button", () => {
    renderLogin();

    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });

  it("allows typing", async () => {
    renderLogin();

    const email = screen.getByPlaceholderText(
      /enter your email/i
    );

    const password = screen.getByPlaceholderText(
      /enter your password/i
    );

    await userEvent.type(email, "test@test.com");

    await userEvent.type(password, "Password123");

    expect(email).toHaveValue("test@test.com");

    expect(password).toHaveValue("Password123");
  });
});