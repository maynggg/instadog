import { IUserService } from "@/services/user.service";
import { createMutationResolvers } from "../../../resolvers/Mutation";
import { FakeUserService } from "../../../services/fakes/fakeUser.service";
import { IAuthenticationService } from "../../../services/authentication.service";
import { FakeAuthenticationService } from "../../../services/fakes/fakeAuthentication.service";

describe("Mutation Resolvers => register", () => {
  let userService: IUserService;
  let authenticationService: IAuthenticationService;

  beforeEach(() => {
    jest.clearAllMocks();

    userService = new FakeUserService();
    authenticationService = new FakeAuthenticationService();
  });

  it("should throw error if the username already exists", async () => {
    const userInput = {
      userName: "test",
      password: "test",
      email: "test@gmail.com",
    };

    jest.spyOn(userService, "createOne").mockRejectedValueOnce(new Error("Username already exists"));
    jest.spyOn(authenticationService, "hashData").mockResolvedValueOnce(expect.anything());
    jest.spyOn(authenticationService, "signPayload").mockReturnValueOnce(expect.anything());

    const { register } = createMutationResolvers({ userService, authenticationService });

    await expect(() => register(null, { input: userInput }, undefined, undefined)).rejects.toThrowError(
      "Username already exists",
    );
  });

  it("should return the created user and the token if the input is correct", async () => {
    const userInput = {
      userName: "test",
      password: "test",
      email: "test@gmail.com",
    };
    const mockUser = {
      _id: "6543640eb66e77bfef7b2288",
      userName: "test",
      password: "test",
      email: "test@gmail.com",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      updatedAt: new Date("2023-01-01T00:00:00.000Z"),
    };
    const mockHashedPassword = "mock-hashed-password";
    const mockSignedJwt = "mock-jwt";

    jest.spyOn(userService, "createOne").mockResolvedValueOnce(mockUser);
    jest.spyOn(authenticationService, "hashData").mockResolvedValueOnce(mockHashedPassword);
    jest.spyOn(authenticationService, "signPayload").mockReturnValueOnce(mockSignedJwt);

    const { register } = createMutationResolvers({ userService, authenticationService });

    const result = await register(null, { input: userInput }, undefined, undefined);

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
