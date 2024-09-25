import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHeading } from "./PageHeading";

describe("PageHeading", () => {
  test("should render", () => {
    render(<PageHeading />);

    expect(screen.getByText(/runner pulse/i)).toBeInTheDocument();
    expect(screen.getByTestId("app-logo")).toBeInTheDocument();
  });
});
