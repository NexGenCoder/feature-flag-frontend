import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should render component", () => {
    render(<Home />);
    expect(screen.getByText("Feature Flag")).toBeDefined();
  });
});
