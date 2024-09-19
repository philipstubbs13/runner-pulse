import { render, screen } from "@testing-library/react";
import { NotFoundCard } from "./NotFoundCard";
import { Routes } from "@/utils/router/Routes.constants";
import { ComponentProps } from "react";

describe("NotFoundCard", () => {
  const defaultProps: ComponentProps<typeof NotFoundCard> = {
    children: <p>No content available.</p>,
    redirectLink: Routes.Results,
    redirectLinkLabel: "Go Back",
    title: "Page Not Found",
  };

  test("should render the title and custom content correctly", () => {
    render(<NotFoundCard {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    const content = screen.getByText("No content available.");

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test("should render the redirect button with correct label and link", () => {
    render(<NotFoundCard {...defaultProps} />);

    const button = screen.getByRole("button", { name: /go back/i });
    const link = screen.getByRole("link", { name: /go back/i });

    expect(button).toBeInTheDocument();
    expect(link).toHaveAttribute("href", Routes.Results);
  });

  test("should render the AlertTriangle and ArrowLeft icons", () => {
    render(<NotFoundCard {...defaultProps} />);

    const alertIcon = screen.getByTestId("alert-triangle");
    const arrowIcon = screen.getByTestId("arrowleft");

    expect(alertIcon).toBeInTheDocument();
    expect(arrowIcon).toBeInTheDocument();
  });
});
