import { LikeResolvers } from "@/generated/resolvers-types";
import { User } from "../models/user";

export const LikeResolversImpl: LikeResolvers = {
  user: async (like) => {
    const user = await User.findById(like.userId).lean();
    return {
      ...user,
      _id: user._id.toString(),
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  },
};
