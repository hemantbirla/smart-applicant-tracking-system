import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";

// 1. Mock the layout layer out of the equation
vi.mock("../../layouts/DashboardLayout", () => ({
  default: ({ children }) => <div data-testid="mock-layout">{children}</div>,
  DashboardLayout: ({ children }) => <div data-testid="mock-layout">{children}</div>,
}));

// 2. Mock out ALL individual sub-components rendering inside Profile.jsx to strip context hooks
vi.mock("../../components/profile/ProfileHeader", () => ({
  default: () => <div data-testid="profile-header">Profile Header</div>
}));

vi.mock("../../components/profile/PersonalInfo", () => ({
  default: () => <div>Personal Information Section</div>
}));

vi.mock("../../components/profile/SkillsSection", () => ({
  default: () => <div>Skills Section Content</div>
}));

vi.mock("../../components/profile/ExperienceSection", () => ({
  default: () => <div>Experience Section Content</div>
}));

vi.mock("../../components/profile/EducationSection", () => ({
  default: () => <div>Education Section Content</div>
}));

vi.mock("../../components/profile/EditProfileModal", () => ({
  default: () => <div data-testid="edit-modal">Edit Profile Modal</div>
}));

vi.mock("../../components/resume/ResumeUpload", () => ({
  default: () => <div>Resume Upload Box</div>
}));

describe("Profile Component Tests", () => {
  it("renders profile page", async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );

    // Using findByText automatically handles the 1500ms mock API timeout safely
    const personalInfo = await screen.findByText(/personal information/i, {}, { timeout: 2500 });
    expect(personalInfo).toBeInTheDocument();
  });

  it("renders skills section", async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );

    const skillsSection = await screen.findByText(/skills/i, {}, { timeout: 2500 });
    expect(skillsSection).toBeInTheDocument();
  });

  it("renders resume upload", async () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );

    const resumeSection = await screen.findByText(/resume upload/i, {}, { timeout: 2500 });
    expect(resumeSection).toBeInTheDocument();
  });
});