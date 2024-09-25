import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { SettingsButton } from "@/components/buttons/settings-button/SettingsButton";
import {
  SettingsButtonVariant,
  settingsVariantProps,
} from "@/components/buttons/settings-button/SettingsButton.constants";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("SettingsButton", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    // @ts-ignore
    (useRouter as vi.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render the correct label and icon for each variant", () => {
    const variant = SettingsButtonVariant.ManagePhotos;
    const { label } = settingsVariantProps[variant];

    render(<SettingsButton variant={variant} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByTestId("settings-button-icon")).toBeInTheDocument();
  });

  test("should calls router.push with the correct route when button is clicked", () => {
    const variant = SettingsButtonVariant.ManagePhotos;
    const { route } = settingsVariantProps[variant];

    render(<SettingsButton variant={variant} />);

    fireEvent.click(screen.getByRole("button"));

    expect(mockPush).toHaveBeenCalledWith(route);
  });
});
