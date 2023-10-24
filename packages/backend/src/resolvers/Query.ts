import { QueryResolvers } from "@/generated/resolvers-types";
import { User } from "../models/user";

export const QueryResolversImpl: QueryResolvers = {
  getUserById: async (_, { id }: { id: string }) => {
    const user = await User.findById(id).lean();

    if (!user) return null;

    return {
      _id: user._id.toString(),
      userName: user.userName,
      password: user.password,
      email: user.email,
      bio: user.bio,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  },
};
