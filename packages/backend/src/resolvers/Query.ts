import { QueryResolvers } from "@/generated/resolvers-types";
import { IUserService } from "@/services/user.service";

export const createQueryResolvers = ({ userService }: { userService: IUserService }): QueryResolvers => {
  return {
    getUserById: async (_parent, { id }: { id: string }) => {
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
