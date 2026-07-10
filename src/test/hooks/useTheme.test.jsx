import React from "react";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";

// The wrapper component providing context to our hook
const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

describe("useTheme Hook", () => {
  it("should return default theme", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper,
    });

    expect(result.current.theme).toBeDefined();
  });

  it("should toggle theme", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper,
    });

    const oldTheme = result.current.theme;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).not.toBe(oldTheme);
  });
});