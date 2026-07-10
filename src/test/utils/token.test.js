import { describe, it, expect, vi } from "vitest";
import { decodeToken, isTokenExpired } from "../../utils/token";

// 1. Mock the named export correctly instead of default
vi.mock("jwt-decode", () => ({
  jwtDecode: vi.fn(),
}));

// 2. Import the named mock function to use inside the tests
import { jwtDecode } from "jwt-decode";

describe("Token Utility", () => {
  it("should decode token", () => {
    // Mock the return value for the named export
    vi.mocked(jwtDecode).mockReturnValue({
      id: 1,
      email: "test@test.com",
    });

    const result = decodeToken("valid_token_string");

    expect(result.email).toBe("test@test.com");
  });

  it("should detect expired token", () => {
    vi.mocked(jwtDecode).mockReturnValue({
      exp: Math.floor(Date.now() / 1000) - 100,
    });

    expect(isTokenExpired("expired_token_string")).toBe(true);
  });

  it("should detect valid token", () => {
    vi.mocked(jwtDecode).mockReturnValue({
      exp: Math.floor(Date.now() / 1000) + 10000,
    });

    expect(isTokenExpired("valid_token_string")).toBe(false);
  });
});