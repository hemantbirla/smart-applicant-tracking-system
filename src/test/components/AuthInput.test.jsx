import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import AuthInput from "../../components/auth/AuthInput";

describe("AuthInput Component", () => {
  // Mock react-hook-form register function
  const register = vi.fn(() => ({}));

  it("renders label correctly", () => {
    render(
      <AuthInput
        label="Email"
        name="email"
        placeholder="Enter email"
        register={register}
      />
    );

    expect(
      screen.getByText("Email")
    ).toBeInTheDocument();
  });

  it("renders input placeholder", () => {
    render(
      <AuthInput
        label="Email"
        name="email"
        placeholder="Enter email"
        register={register}
      />
    );

    expect(
      screen.getByPlaceholderText("Enter email")
    ).toBeInTheDocument();
  });

  it("allows typing into the input", async () => {
    const user = userEvent.setup();

    render(
      <AuthInput
        label="Email"
        name="email"
        placeholder="Enter email"
        register={() => ({})}
      />
    );

    const input =
      screen.getByPlaceholderText("Enter email");

    await user.type(input, "hemant@test.com");

    expect(input).toHaveValue(
      "hemant@test.com"
    );
  });

  it("shows validation error message", () => {
    render(
      <AuthInput
        label="Email"
        name="email"
        placeholder="Enter email"
        register={register}
        error={{
          message: "Email is required",
        }}
      />
    );

    expect(
      screen.getByText("Email is required")
    ).toBeInTheDocument();
  });

  it("does not show error when error prop is absent", () => {
    render(
      <AuthInput
        label="Email"
        name="email"
        placeholder="Enter email"
        register={register}
      />
    );

    expect(
      screen.queryByText(/required/i)
    ).not.toBeInTheDocument();
  });

  it("renders password input", () => {
    render(
      <AuthInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        register={register}
      />
    );

    expect(
      screen.getByPlaceholderText(
        "Enter password"
      )
    ).toHaveAttribute(
      "type",
      "password"
    );
  });
});