import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FooterQuickLink } from "./FooterQuickLink";
import { Routes } from "@/utils/router/Routes.constants";

describe("FooterQuickLink", () => {
  test("should render", () => {
    render(<FooterQuickLink href={Routes.Results} label="Personal Results" />);

    expect(
      screen.getByRole("link", { name: "Personal Results" })
    ).toBeInTheDocument();
  });
});
