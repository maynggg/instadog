import { IUserService } from "@/services/user.service";
import { createMutationResolvers } from "../../../resolvers/Mutation";
import { FakeUserService } from "../../../services/fakes/fakeUser.service";
import { IAuthenticationService } from "../../../services/authentication.service";
import { FakeAuthenticationService } from "../../../services/fakes/fakeAuthentication.service";

describe("Mutation Resolvers => login", () => {
  let userService: IUserService;
  let authenticationService: IAuthenticationService;

  beforeEach(() => {
    jest.clearAllMocks();

    userService = new FakeUserService();
    authenticationService = new FakeAuthenticationService();
  });

  it("should throw error if the user is not found", async () => {
    const userName = "test";
    const password = "test";

    jest.spyOn(userService, "findByUserName").mockRejectedValueOnce(new Error("User not found"));
    jest.spyOn(authenticationService, "compareHash").mockResolvedValueOnce(expect.anything());
    jest.spyOn(authenticationService, "signPayload").mockReturnValueOnce(expect.anything());

    const { login } = createMutationResolvers({ userService, authenticationService });

    await expect(() => login(null, { userName, password }, undefined, undefined)).rejects.toThrowError(
      "User not found",
    );
  });

  it("should throw error if password is incorrect", async () => {
    const userName = "test";
    const invalidPassword = "test";
    const mockUser = {
      _id: "6543640eb66e77bfef7b2288",
      userName: "test",
      password: "test",
      email: "test@gmail.com",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      updatedAt: new Date("2023-01-01T00:00:00.000Z"),
    };

    jest.spyOn(userService, "findByUserName").mockResolvedValueOnce(mockUser);
    jest.spyOn(authenticationService, "compareHash").mockResolvedValueOnce(false);
    jest.spyOn(authenticationService, "signPayload").mockReturnValueOnce(expect.anything());

    const { login } = createMutationResolvers({ userService, authenticationService });

    await expect(() => login(null, { userName, password: invalidPassword }, undefined, undefined)).rejects.toThrowError(
      "Incorrect password",
    );
  });

  it("should return the user and the token if the password is correct", async () => {
    const userName = "test";
    const password = "test";
    const mockUser = {
      _id: "6543640eb66e77bfef7b2288",
      userName: "test",
      password: "test",
      email: "test@gmail.com",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      updatedAt: new Date("2023-01-01T00:00:00.000Z"),
    };
    const mockSignedJwt = "mock-jwt";

    jest.spyOn(userService, "findByUserName").mockResolvedValueOnce(mockUser);
    jest.spyOn(authenticationService, "compareHash").mockResolvedValueOnce(true);
    jest.spyOn(authenticationService, "signPayload").mockReturnValueOnce(mockSignedJwt);

    const { login } = createMutationResolvers({ userService, authenticationService });

    const result = await login(null, { userName, password }, undefined, undefined);

    expect(result).toEqual({
      token: mockSignedJwt,
      user: {
        ...mockUser,
        createdAt: mockUser.createdAt.toISOString(),
        updatedAt: mockUser.updatedAt.toISOString(),
      },
    });
  });
});
