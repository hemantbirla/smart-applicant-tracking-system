import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "../../pages/Dashboard/Dashboard";

// Mock layout
vi.mock("../../layouts/DashboardLayout", () => ({
  default: ({ children }) => <div>{children}</div>,
}));

// Mock loading hook
vi.mock("../../hooks/useLoading", () => ({
  default: () => ({
    loading: false,
    startLoading: vi.fn(),
    stopLoading: vi.fn(),
  }),
}));

describe("Dashboard", () => {
  it("renders dashboard statistics", () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/dashboard statistics/i)
    ).toBeInTheDocument();
  });
});