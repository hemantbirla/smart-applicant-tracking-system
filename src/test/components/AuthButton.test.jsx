import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import AuthButton from "../../components/auth/AuthButton";

describe("AuthButton", () => {
  it("renders button text", () => {
    render(<AuthButton>Login</AuthButton>);

    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <AuthButton onClick={handleClick}>
        Login
      </AuthButton>
    );

    await user.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled", () => {
    render(
      <AuthButton disabled>
        Login
      </AuthButton>
    );

    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeDisabled();
  });
});