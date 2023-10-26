import { MutationResolvers, UserInput } from "@/generated/resolvers-types";
import { UserService } from "@/services/user.service";

export const createMutationResolvers = ({ userService }: { userService: UserService }): MutationResolvers => {
  return {
    updateUser: async (_, { id, input }: { id: string; input: UserInput }) => {
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
