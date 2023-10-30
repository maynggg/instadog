import { LikeResolvers } from "@/generated/resolvers-types";
import { IUserService } from "@/services/user.service";

export const createLikeResolvers = ({ userService }: { userService: IUserService }): LikeResolvers => {
  return {
    user: async (like) => {
      const user = await userService.findById(like.userId);

      return {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
      };
    },
  };
};
