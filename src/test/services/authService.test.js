import { describe, it, expect, vi, beforeEach } from "vitest";

import { login, signup, logout } from "../../services/authService";

import axiosInstance from "../../api/axios";

vi.mock("../../api/axios", () => ({
  default: {
    post: vi.fn(),
  },
}));

describe("Auth Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // LOGIN TEST

  it("should login user successfully", async () => {
    const mockResponse = {
      data: {
        token: "abc123",
        user: {
          name: "Hemant",
        },
      },
    };

    axiosInstance.post.mockResolvedValue(mockResponse);

    const result = await login({
      email: "test@test.com",
      password: "123456",
    });

    expect(axiosInstance.post).toHaveBeenCalledWith("/auth/login", {
      email: "test@test.com",
      password: "123456",
    });

    expect(result).toEqual(mockResponse.data);
  });

  // SIGNUP TEST

  it("should signup user successfully", async () => {
    axiosInstance.post.mockResolvedValue({
      data: {
        message: "Account created",
      },
    });

    const result = await signup({
      name: "Hemant",
      email: "test@test.com",
      password: "123456",
    });

    expect(axiosInstance.post).toHaveBeenCalledWith("/auth/signup", {
      name: "Hemant",
      email: "test@test.com",
      password: "123456",
    });

    expect(result.message).toBe("Account created");
  });

  // LOGOUT TEST

  it("should logout user", async () => {
    axiosInstance.post.mockResolvedValue({
      data: {
        success: true,
      },
    });

    const result = await logout();

    expect(axiosInstance.post).toHaveBeenCalledWith("/auth/logout");

    expect(result.success).toBe(true);
  });
});
