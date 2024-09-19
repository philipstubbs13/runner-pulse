import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FooterSocialLink } from "./FooterSocialLink";
import { Instagram } from "lucide-react";

describe("FooterSocialLink", () => {
  test("should render", () => {
    render(
      <FooterSocialLink href={"www.instagram.com"} label="Instagram">
        <Instagram />
      </FooterSocialLink>
    );

    const link = screen.getByRole("link", { name: "Instagram" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("target", "_blank");
  });
});
