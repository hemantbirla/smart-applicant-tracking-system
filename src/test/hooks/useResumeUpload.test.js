import { renderHook, act } from "@testing-library/react";

import { describe, it, expect } from "vitest";

import useResumeUpload from "../../hooks/useResumeUpload";

describe("useResumeUpload Hook", () => {
  it("should have initial state", () => {
    const { result } = renderHook(() => useResumeUpload());

    expect(result.current.file).toBeNull();

    expect(result.current.uploading).toBe(false);
  });

  it("should select valid resume", () => {
    const { result } = renderHook(() => useResumeUpload());

    const file = new File(["resume content"], "resume.pdf", {
      type: "application/pdf",
    });

    act(() => {
      result.current.handleFileChange({
        target: {
          files: [file],
        },
      });
    });

    expect(result.current.file.name).toBe("resume.pdf");
  });

  it("should remove resume", async () => {
    const { result } = renderHook(() => useResumeUpload());

    act(() => {
      result.current.removeFile();
    });

    expect(result.current.file).toBeNull();
  });
});
