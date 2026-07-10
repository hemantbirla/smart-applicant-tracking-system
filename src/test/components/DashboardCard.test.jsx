import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FiClipboard } from "react-icons/fi";

import DashboardCard from "../../components/dashboard/DashboardCard";

describe("DashboardCard Component", () => {
  const props = {
    title: "Applied Jobs",
    count: 18,
    icon: FiClipboard,
    color: "#2563EB",
  };

  it("renders without crashing", () => {
    render(<DashboardCard {...props} />);

    expect(
      screen.getByText("Applied Jobs")
    ).toBeInTheDocument();
  });

  it("displays the correct count", () => {
    render(<DashboardCard {...props} />);

    expect(
      screen.getByText("18")
    ).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<DashboardCard {...props} />);

    expect(
      screen.getByText("Applied Jobs")
    ).toBeInTheDocument();
  });

  it("renders the icon", () => {
    const { container } = render(
      <DashboardCard {...props} />
    );

    expect(
      container.querySelector("svg")
    ).toBeInTheDocument();
  });

  it("applies background color to icon container", () => {
    const { container } = render(
      <DashboardCard {...props} />
    );

    const iconContainer =
      container.querySelector(".dashboard-card-icon");

    expect(iconContainer).toHaveStyle({
      backgroundColor: "#2563EB",
    });
  });
});