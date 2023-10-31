import { createQueryResolvers } from "../../Query";
import { FakeUserService } from "../../../services/fakes/fakeUser.service";
import { IUserService } from "@/services/user.service";

describe("Query Resolvers => getUserById", () => {
  let userService: IUserService;

  beforeEach(() => {
    jest.clearAllMocks();

    userService = new FakeUserService();
  });

  it("should return null if the user is not found", async () => {
    const nonExistingUserId = "65403524239d16fa9881a61c";

    jest.spyOn(userService, "findById").mockResolvedValueOnce(null);

    const { getUserById } = createQueryResolvers({ userService });

    const user = await getUserById(null, { id: nonExistingUserId }, undefined, undefined);

    expect(user).toBeNull();

    expect(userService.findById).toHaveBeenCalledTimes(1);
    expect(userService.findById).toHaveBeenCalledWith(nonExistingUserId);
  });

  it("should return the user if it is found", async () => {
    const userId = "654035342e6d2c4d261076d3";
    const mockUser = {
      _id: userId,
      userName: "test",
      password: "test",
      email: "test@gmail.com",
      bio: "Hello world!",
      avatarUrl: "https://www.google.com",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      updatedAt: new Date("2023-01-01T00:00:00.000Z"),
    };

    jest.spyOn(userService, "findById").mockResolvedValueOnce(mockUser);

    const { getUserById } = createQueryResolvers({ userService });

    const user = await getUserById(null, { id: userId }, undefined, undefined);

    expect(user).toEqual({
      ...mockUser,
      createdAt: mockUser.createdAt.toISOString(),
      updatedAt: mockUser.updatedAt.toISOString(),
    });

    expect(userService.findById).toHaveBeenCalledTimes(1);
    expect(userService.findById).toHaveBeenCalledWith(userId);
  });
});
