import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader", () => {
  test("should render", () => {
    render(<Loader />);

    expect(screen.getByLabelText(/loading spinner/i)).toBeInTheDocument();
  });
});
