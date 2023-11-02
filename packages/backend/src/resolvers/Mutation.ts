import { CreateUserInput, MutationResolvers, UpdateUserInput } from "@/generated/resolvers-types";
import { IAuthenticationService } from "@/services/authentication.service";
import { IUserService } from "@/services/user.service";

export const createMutationResolvers = ({
  userService,
  authenticationService,
}: {
  userService: IUserService;
  authenticationService: IAuthenticationService;
}): MutationResolvers => {
  return {
    register: async (_parent, { input }: { input: CreateUserInput }) => {
      const { userName, email, password } = input;

      const hashedPassword = await authenticationService.hashData(password);

      const user = await userService.createOne({ userName, email, password: hashedPassword });

      const token = authenticationService.signPayload({ id: user._id, email: user.email });

      return {
        token,
        user: {
          ...user,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        },
      };
    },
    login: async (_parent, { userName, password }: { userName: string; password: string }) => {
      const user = await userService.findByUserName(userName);
      if (!user) {
        throw new Error(`User not found with username ${userName}`);
      }

      const isValid = await authenticationService.compareHash(password, user.password);

      if (!isValid) {
        throw new Error("Incorrect password");
      }

      const token = authenticationService.signPayload({ id: user._id, email: user.email });

      return {
        token,
        user: {
          ...user,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        },
      };
    },
    updateUser: async (_parent, { id, input }: { id: string; input: UpdateUserInput }) => {
      const user = await userService.findById(id);

      if (!user) {
        throw new Error(`User not found with id ${id}`);
      }

      const updatedUser = await userService.findByIdAndUpdate(id, input);

      return {
        ...updatedUser,
        createdAt: updatedUser.createdAt.toISOString(),
        updatedAt: updatedUser.updatedAt.toISOString(),
      };
    },
  };
};
