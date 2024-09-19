import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  test("should render", () => {
    render(<Avatar />);

    expect(screen.getByTestId("ui-avatar")).toBeInTheDocument();
  });
});
