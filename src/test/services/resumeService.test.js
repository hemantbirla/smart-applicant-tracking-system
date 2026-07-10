import { describe, it, expect, vi, beforeEach } from "vitest";

import {
  uploadResume,
  deleteResume,
  getResume,
} from "../../services/resumeService";

import axiosInstance from "../../api/axios";

vi.mock("../../api/axios", () => ({
  default: {
    post: vi.fn(),
    delete: vi.fn(),
    get: vi.fn(),
  },
}));

describe("Resume Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // UPLOAD TEST

  it("should upload resume", async () => {
    const file = new File(["resume"], "resume.pdf", {
      type: "application/pdf",
    });

    axiosInstance.post.mockResolvedValue({
      data: {
        url: "resume.pdf",
      },
    });

    const result = await uploadResume(file);

    expect(axiosInstance.post).toHaveBeenCalled();

    expect(result.url).toBe("resume.pdf");
  });

  // DELETE TEST

  it("should delete resume", async () => {
    axiosInstance.delete.mockResolvedValue({
      data: {
        success: true,
      },
    });

    const result = await deleteResume();

    expect(axiosInstance.delete).toHaveBeenCalledWith("/resume");

    expect(result.success).toBe(true);
  });

  // GET TEST

  it("should fetch resume", async () => {
    axiosInstance.get.mockResolvedValue({
      data: {
        file: "resume.pdf",
      },
    });

    const result = await getResume();

    expect(axiosInstance.get).toHaveBeenCalledWith("/resume");

    expect(result.file).toBe("resume.pdf");
  });
});
