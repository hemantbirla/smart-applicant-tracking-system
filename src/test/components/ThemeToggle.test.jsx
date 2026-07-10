import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";

import ThemeToggle from "../../components/common/ThemeToggle";

// Mock the custom hook
const mockToggleTheme = vi.fn();

vi.mock("../../hooks/useTheme", () => ({
  default: () => ({
    theme: "light",
    toggleTheme: mockToggleTheme,
  }),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the button", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("shows Dark when theme is light", () => {
    render(<ThemeToggle />);

    expect(screen.getByText("Dark")).toBeInTheDocument();
  });

  it("calls toggleTheme when clicked", async () => {
    const user = userEvent.setup();

    render(<ThemeToggle />);

    await user.click(screen.getByRole("button"));

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});