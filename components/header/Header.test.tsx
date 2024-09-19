import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";
import { signOut, useSession } from "next-auth/react";
import { useGlobalContext } from "@/context/global-context/GlobalContext";
import { useRouter } from "next/navigation";
import { Mock, vi } from "vitest";
import { Tab } from "../tabs/Tabs.constants";
import { Routes } from "@/utils/router/Routes.constants";

vi.mock("next-auth/react");
vi.mock("@/context/global-context/GlobalContext");
vi.mock("next/navigation");

describe("Header", () => {
  const mockRouter = { push: vi.fn() };
  const mockUpdateActiveTab = vi.fn();

  const mockSession = {
    data: {
      user: {
        name: "John Doe",
        email: "john@example.com",
        image: "/john-doe.jpg",
      },
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();

    (useRouter as Mock).mockReturnValue(mockRouter);
    (useSession as Mock).mockReturnValue(mockSession);
    (useGlobalContext as Mock).mockReturnValue({
      activeTab: Tab.Gallery,
      updateActiveTab: mockUpdateActiveTab,
    });
  });

  test("should render the user's profile information", () => {
    render(<Header />);

    const avatarFallback = screen.getByText("JD");

    expect(avatarFallback).toBeInTheDocument();
  });

  test("should open the profile sheet when avatar is clicked", () => {
    render(<Header />);

    const avatar = screen.getByText("JD");
    fireEvent.click(avatar);

    const profileTitle = screen.getByText("Profile");
    const userName = screen.getByText("John Doe");
    const userEmail = screen.getByText("john@example.com");

    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });

  test("should navigate to manage photos when the manage photos button is clicked", () => {
    render(<Header />);

    const avatar = screen.getByText("JD");
    fireEvent.click(avatar);

    const managePhotosButton = screen.getByRole("button", {
      name: /manage photos/i,
    });
    fireEvent.click(managePhotosButton);

    expect(mockRouter.push).toHaveBeenCalledWith(Routes.ManagePhotos);
  });

  test("should navigate to manage race distances when the manage race distances button is clicked", () => {
    render(<Header />);

    const avatar = screen.getByText("JD");
    fireEvent.click(avatar);

    const manageRaceDistancesButton = screen.getByRole("button", {
      name: /manage race distances/i,
    });
    fireEvent.click(manageRaceDistancesButton);

    expect(mockRouter.push).toHaveBeenCalledWith(Routes.ManageRaceDistances);
  });

  test("should call signOut and updates the active tab when the logout button is clicked", () => {
    render(<Header />);

    const avatar = screen.getByText("JD");
    fireEvent.click(avatar);

    const logoutButton = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(logoutButton);

    expect(mockUpdateActiveTab).toHaveBeenCalledWith(Tab.Results);
    expect(signOut).toHaveBeenCalled();
  });
});
