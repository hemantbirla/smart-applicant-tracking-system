import { describe, it, expect } from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Signup from "../../pages/Signup/Signup";

import { AuthProvider } from "../../context/AuthContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { UserProvider } from "../../context/UserContext";


const renderSignup = () => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <UserProvider>
            <Signup />
          </UserProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};


describe("Signup Page", () => {

  it("renders signup form", () => {

    renderSignup();

    expect(
      screen.getByText(/create account/i)
    ).toBeInTheDocument();

  });


  it("renders full name input", () => {

    renderSignup();

    expect(
      screen.getByPlaceholderText(
        /enter your full name/i
      )
    ).toBeInTheDocument();

  });


  it("renders email input", () => {

    renderSignup();

    expect(
      screen.getByPlaceholderText(
        /enter your email/i
      )
    ).toBeInTheDocument();

  });


  it("renders password input", () => {

    renderSignup();

    expect(
      screen.getByPlaceholderText(
        /enter your password/i
      )
    ).toBeInTheDocument();

  });


  it("renders register button", () => {

    renderSignup();

    expect(
      screen.getByRole(
        "button",
        {
          name: /register/i,
        }
      )
    ).toBeInTheDocument();

  });

});