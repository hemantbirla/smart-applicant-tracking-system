import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import ResumeUpload from "../../components/resume/ResumeUpload";

// Mock react-toastify
vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

// Mock custom hook
vi.mock("../../hooks/useResumeUpload", () => ({
  default: () => ({
    file: null,
    error: "",
    dragActive: false,
    progress: 0,
    uploading: false,
    handleFileChange: vi.fn(),
    handleDragEnter: vi.fn(),
    handleDragLeave: vi.fn(),
    handleDragOver: vi.fn(),
    handleDrop: vi.fn(),
    removeFile: vi.fn(),
    uploadFile: vi.fn(),
  }),
}));

describe("ResumeUpload", () => {
  it("renders Resume Upload heading", () => {
    render(<ResumeUpload />);

    expect(
      screen.getByText(/resume upload/i)
    ).toBeInTheDocument();
  });

  it("shows DropZone initially", () => {
    render(<ResumeUpload />);

    expect(
      screen.getByText(/drag/i)
    ).toBeInTheDocument();
  });
});