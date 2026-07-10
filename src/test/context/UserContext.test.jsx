import { render, screen, act } from "@testing-library/react";

import { UserProvider, useUser } from "../../context/UserContext";

import { describe, test, expect } from "vitest";

const TestComponent = () => {
  const { profile, setProfile, updateProfile, clearProfile } = useUser();

  return (
    <>
      <p data-testid="profile">{profile ? profile.name : "No Profile"}</p>

      <button
        onClick={() =>
          setProfile({
            name: "Hemant",
            role: "candidate",
          })
        }
      >
        Set Profile
      </button>

      <button
        onClick={() =>
          updateProfile({
            name: "Updated Hemant",
          })
        }
      >
        Update
      </button>

      <button onClick={clearProfile}>Clear</button>
    </>
  );
};

describe("UserContext", () => {
  test("should set profile", async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    await act(async () => {
      screen.getByText("Set Profile").click();
    });

    expect(screen.getByTestId("profile")).toHaveTextContent("Hemant");
  });

  test("should clear profile", async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    await act(async () => {
      screen.getByText("Set Profile").click();

      screen.getByText("Clear").click();
    });

    expect(screen.getByTestId("profile")).toHaveTextContent("No Profile");
  });
});
