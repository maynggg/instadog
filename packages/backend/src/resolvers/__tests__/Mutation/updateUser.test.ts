import { IUserService } from "@/services/user.service";
import { createMutationResolvers } from "../../../resolvers/Mutation";
import { FakeUserService } from "../../../services/fakes/fakeUser.service";

describe("Mutation Resolvers => updateUser", () => {
  let userService: IUserService;

  beforeEach(() => {
    jest.clearAllMocks();

    userService = new FakeUserService();
  });

  it("should return null if the user is not found", async () => {
    const nonExistingUserId = "65403524239d16fa9881a61c";
    const userInput = {
      userName: "test",
      password: "test",
      email: "test@gmail.com",
      bio: "Hello world!",
    };

    jest.spyOn(userService, "findById").mockResolvedValueOnce(null);
    jest.spyOn(userService, "findByIdAndUpdate").mockResolvedValueOnce(expect.anything());

    const { updateUser } = createMutationResolvers({ userService });

    await expect(() =>
      updateUser(null, { id: nonExistingUserId, input: userInput }, undefined, undefined),
    ).rejects.toThrowError();

    expect(userService.findById).toHaveBeenCalledTimes(1);
    expect(userService.findById).toHaveBeenCalledWith(nonExistingUserId);

    expect(userService.findByIdAndUpdate).not.toHaveBeenCalled();
  });

  it("should return the updated user", async () => {
    const userId = "654035342e6d2c4d261076d3";
    const userInput = {
      userName: "snuggles",
    };
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
    const mockUpdatedUser = {
      ...mockUser,
      userName: userInput.userName,
    };

    jest.spyOn(userService, "findById").mockResolvedValueOnce(mockUser);
    jest.spyOn(userService, "findByIdAndUpdate").mockResolvedValueOnce(mockUpdatedUser);

    const { updateUser } = createMutationResolvers({ userService });

    const updatedUser = await updateUser(null, { id: userId, input: userInput }, undefined, undefined);

    expect(updatedUser).toEqual({
      ...mockUpdatedUser,
      createdAt: mockUpdatedUser.createdAt.toISOString(),
      updatedAt: mockUpdatedUser.updatedAt.toISOString(),
    });

    expect(userService.findById).toHaveBeenCalledTimes(1);
    expect(userService.findById).toHaveBeenCalledWith(userId);

    expect(userService.findByIdAndUpdate).toHaveBeenCalledTimes(1);
    expect(userService.findByIdAndUpdate).toHaveBeenCalledWith(userId, userInput);
  });
});
