import { describe, it, expect, beforeEach } from "vitest";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  clearTokens,
  setSavedJobs,
  getSavedJobs
} from "../../utils/storage";

describe("Storage Utility", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should store and retrieve access token", () => {
    setAccessToken("abc12345");
    expect(localStorage.getItem("accessToken")).toBe("abc12345");
    expect(getAccessToken()).toBe("abc12345");
  });

  it("should remove access token", () => {
    setAccessToken("abc12345");
    removeAccessToken();
    expect(getAccessToken()).toBeNull();
  });

  it("should store and retrieve complex objects like saved jobs", () => {
    const jobs = [{ id: 1, title: "Frontend Developer" }];
    setSavedJobs(jobs);
    
    expect(getSavedJobs()).toEqual(jobs);
  });

  it("should clear all related tokens and session data", () => {
    setAccessToken("access");
    setSavedJobs([{ id: 1 }]);
    
    clearTokens();

    expect(getAccessToken()).toBeNull();
    expect(getSavedJobs()).toEqual([]);
  });
});