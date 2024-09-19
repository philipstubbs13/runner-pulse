import { getServerSession } from "next-auth/next";
import { getSessionUser } from "@/utils/getSessionUser";
import { Mock, vi } from "vitest";

vi.mock("next-auth/next", () => ({
  getServerSession: vi.fn(),
}));

describe(".getSessionUser()", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should return null if there is no session", async () => {
    (getServerSession as Mock).mockResolvedValue(null);

    const result = await getSessionUser();

    expect(result).toBeNull();
  });

  test("should return null if session exists but has no user", async () => {
    (getServerSession as Mock).mockResolvedValue({
      user: null,
    });

    const result = await getSessionUser();

    expect(result).toBeNull();
  });

  test("should return the user and userId if session has a valid user", async () => {
    const mockSession = {
      user: {
        id: "123",
        name: "John Doe",
        email: "john@example.com",
      },
    };
    (getServerSession as Mock).mockResolvedValue(mockSession);

    const result = await getSessionUser();

    expect(result).toEqual({
      user: mockSession.user,
      userId: "123",
    });
  });
});
