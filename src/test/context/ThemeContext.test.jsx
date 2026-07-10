import { render, screen, act } from "@testing-library/react";

import { ThemeProvider, useTheme } from "../../context/ThemeContext";

import { describe, test, expect } from "vitest";

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <p data-testid="theme">{theme}</p>

      <button onClick={toggleTheme}>Toggle</button>
    </>
  );
};

describe("ThemeContext", () => {
  test("should provide default theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme")).toBeInTheDocument();
  });

  test("should toggle theme", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    await act(async () => {
      screen.getByText("Toggle").click();
    });

    expect(screen.getByTestId("theme")).toBeInTheDocument();
  });
});
