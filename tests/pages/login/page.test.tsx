import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/login/page";

describe("LoginPage", () => {
  it("should render component", () => {
    render(<LoginPage />);
    expect(screen.getByTestId("login-page")).toBeDefined();
  });

  it("should render logo and other elements", () => {
    render(<LoginPage />);
    expect(screen.getByTestId("login-logo")).toBeDefined();
    expect(screen.getByTestId("login-title")).toBeDefined();
    expect(screen.getByTestId("login-subtitle")).toBeDefined();
    expect(screen.getByTestId("login-google-button")).toBeDefined();
    expect(screen.getByTestId("login-github-button")).toBeDefined();
    expect(screen.getByTestId("login-form")).toBeDefined();
    expect(screen.getByTestId("login-email-input")).toBeDefined();
    expect(screen.getByTestId("login-password-input")).toBeDefined();
    expect(screen.getByTestId("login-remember-checkbox")).toBeDefined();
    expect(screen.getByTestId("login-forgot-password-link")).toBeDefined();
    expect(screen.getByTestId("login-button")).toBeDefined();
    expect(screen.getByTestId("login-signup-text")).toBeDefined();
    expect(screen.getByTestId("login-signup-link")).toBeDefined();
  });

  it("should render logo with correct attributes", () => {
    render(<LoginPage />);
    const logo = screen.getByTestId("login-logo") as HTMLImageElement;
    expect(logo.src).toContain("/logo.png");
    expect(logo.alt).toBe("Login Logo");
  });

  it("should render title with correct text", () => {
    render(<LoginPage />);
    expect(screen.getByText("Welcome Back")).toBeDefined();
  });

  it("should render subtitle with correct text", () => {
    render(<LoginPage />);
    expect(
      screen.getByText("Please enter your details to login"),
    ).toBeDefined();
  });

  it("should render google button with correct text", () => {
    render(<LoginPage />);
    expect(screen.getByText("Google")).toBeDefined();
  });
});
