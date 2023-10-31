import { MutationResolvers, UserInput } from "@/generated/resolvers-types";
import { IUserService } from "@/services/user.service";

export const createMutationResolvers = ({ userService }: { userService: IUserService }): MutationResolvers => {
  return {
    updateUser: async (_parent, { id, input }: { id: string; input: UserInput }) => {
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
