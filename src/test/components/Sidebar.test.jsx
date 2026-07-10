import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import {
  sidebarMenu,
  logoutItem,
} from "../../constants/dashboardData";

// --------------------
// Mock Navigate
// --------------------

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// --------------------
// Mock Auth Context
// --------------------

const mockLogout = vi.fn();

vi.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    logout: mockLogout,
    user: {
      name: "Hemant",
    },
    isAuthenticated: true,
  }),
}));

describe("Sidebar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderSidebar = () =>
    render(
      <MemoryRouter>
        <Sidebar
          sidebarOpen={true}
          closeSidebar={vi.fn()}
          title="Job Portal"
          subtitle="Candidate"
          menu={sidebarMenu}
          logoutItem={logoutItem}
        />
      </MemoryRouter>
    );

  it("renders title", () => {
    renderSidebar();

    expect(
      screen.getByText("Job Portal")
    ).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    renderSidebar();

    expect(
      screen.getByText("Candidate")
    ).toBeInTheDocument();
  });

  it("renders all menu items", () => {
    renderSidebar();

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Jobs")).toBeInTheDocument();
    expect(screen.getByText("Applications")).toBeInTheDocument();
    expect(screen.getByText("Saved Jobs")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("renders logout button", () => {
    renderSidebar();

    expect(
      screen.getByRole("button", {
        name: /logout/i,
      })
    ).toBeInTheDocument();
  });

  it("calls logout and navigate on logout click", async () => {
    const user = userEvent.setup();

    renderSidebar();

    await user.click(
      screen.getByRole("button", {
        name: /logout/i,
      })
    );

    expect(mockLogout).toHaveBeenCalledTimes(1);

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});