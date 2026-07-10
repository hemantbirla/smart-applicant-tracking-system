import { describe, it, expect } from "vitest";
import { validateResumeFile } from "../../utils/fileValidation";

describe("Resume File Validation", () => {
  // Corrected helper function to force a mock file size
  const createFile = (name, type, size) => {
    const file = new File(["dummy content"], name, { type });
    
    // Explicitly override the read-only size property
    Object.defineProperty(file, "size", {
      get: () => size,
    });
    
    return file;
  };

  it("should accept PDF file", () => {
    const file = createFile("resume.pdf", "application/pdf", 1024);
    const result = validateResumeFile(file);
    expect(result.valid).toBe(true);
  });

  it("should accept DOC file", () => {
    const file = createFile("resume.doc", "application/msword", 1024);
    expect(validateResumeFile(file).valid).toBe(true);
  });

  it("should reject JPG", () => {
    const file = createFile("photo.jpg", "image/jpeg", 1024);
    expect(validateResumeFile(file).valid).toBe(false);
  });

  it("should reject large file", () => {
    // Now this mock file will correctly report its size as 6.29MB
    const file = createFile("resume.pdf", "application/pdf", 6 * 1024 * 1024);
    expect(validateResumeFile(file).valid).toBe(false);
  });
});