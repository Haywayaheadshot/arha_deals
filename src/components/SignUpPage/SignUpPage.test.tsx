import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SignUpPage from "./SignUpPage";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("SignUpPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );
  });

  test("renders correctly", () => {
    expect(screen.getByText("Sign up")).toBeInTheDocument();
    expect(screen.getByText("Name:")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("User Name:")).toBeInTheDocument();
    expect(screen.getByText("Date Of Birth:")).toBeInTheDocument();
    expect(screen.getByText("Password:")).toBeInTheDocument();
    expect(screen.getByText("Confirm Password:")).toBeInTheDocument();
  });

  it("validates the name input", () => {
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(screen.getByText("Please enter at least 5 characters")).toBeTruthy();
  });

  it("validates the email input", () => {
    const nameInput = screen.getByPlaceholderText(
      "Please enter your full name here"
    );
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(screen.getByText("Please enter a valid email address")).toBeTruthy();
  });

  it("validates the user name input", () => {
    const nameInput = screen.getByPlaceholderText(
      "Please enter your full name here"
    );
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = screen.getByPlaceholderText(
      "Please enter your email here"
    );
    fireEvent.change(emailInput, { target: { value: "testemail@test.com" } });

    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(
      screen.getByText("Please enter between 3 to 8 characters")
    ).toBeTruthy();
  });

  it("validates the date of birth input", () => {
    const nameInput = screen.getByPlaceholderText(
      "Please enter your full name here"
    );
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = screen.getByPlaceholderText(
      "Please enter your email here"
    );
    fireEvent.change(emailInput, { target: { value: "testemail@test.com" } });

    const userNameInput = screen.getByPlaceholderText(
      "Please enter atleast 3 characters"
    );
    fireEvent.change(userNameInput, {
      target: { value: "tester1" },
    });

    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(
      screen.getByText("You must be at least 15 years old to register.")
    ).toBeTruthy();
  });

  it("validates the password input", () => {
    const nameInput = screen.getByPlaceholderText(
      "Please enter your full name here"
    );
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = screen.getByPlaceholderText(
      "Please enter your email here"
    );
    fireEvent.change(emailInput, { target: { value: "testemail@test.com" } });

    const userNameInput = screen.getByPlaceholderText(
      "Please enter atleast 3 characters"
    );
    fireEvent.change(userNameInput, {
      target: { value: "tester1" },
    });

    const birthDateInput = screen.getByTestId("date-of-birth");
    fireEvent.change(birthDateInput, {
      target: { value: "1990-01-01" },
    });

    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(
      screen.getByText(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
      )
    ).toBeTruthy();
  });

  it("validates the confirm password input", () => {
    const nameInput = screen.getByPlaceholderText(
      "Please enter your full name here"
    );
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = screen.getByPlaceholderText(
      "Please enter your email here"
    );
    fireEvent.change(emailInput, { target: { value: "testemail@test.com" } });

    const userNameInput = screen.getByPlaceholderText(
      "Please enter atleast 3 characters"
    );
    fireEvent.change(userNameInput, {
      target: { value: "tester1" },
    });

    const birthDateInput = screen.getByTestId("date-of-birth");
    fireEvent.change(birthDateInput, {
      target: { value: "1990-01-01" },
    });

    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, {
      target: { value: "Test@app123" },
    });

    const submitButton = screen.getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(
      screen.getByText("Password and confirm password do not match.")
    ).toBeTruthy();
  });
});
