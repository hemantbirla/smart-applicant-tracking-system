import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import React from "react";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";

describe("useAuth Hook", () => {
  it("returns context values when used inside an AuthProvider", () => {
    const mockAuthValue = {
      user: { name: "Hemant", role: "candidate" },
      isAuthenticated: true,
      loading: false,
    };

    // Pure JavaScript wrapper - NO JSX tags allowed inside a .js file
    const wrapper = ({ children }) => 
      React.createElement(AuthContext.Provider, { value: mockAuthValue }, children);

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user?.name).toBe("Hemant");
  });

  it("throws an error when used outside of an AuthProvider", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => renderHook(() => useAuth())).toThrow(
      "useAuth must be used within an AuthProvider"
    );

    consoleSpy.mockRestore();
  });
});