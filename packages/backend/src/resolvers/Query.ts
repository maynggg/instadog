import { QueryResolvers } from "@/generated/resolvers-types";
import { UserService } from "@/services/user.service";

export const createQueryResolvers = ({ userService }: { userService: UserService }): QueryResolvers => {
  return {
    getUserById: async (_, { id }: { id: string }) => {
      const user = await userService.findById(id);

      if (!user) return null;

      return {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      };
    },
  };
};
