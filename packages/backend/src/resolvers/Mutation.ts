import { MutationResolvers, UserInput } from "@/generated/resolvers-types";
import { User } from "../models/user";

export const MutationResolversImpl: MutationResolvers = {
  updateUser: async (_, { id, input }: { id: string; input: UserInput }) => {
    const user = await User.findById(id).lean();

    if (!user) {
      throw new Error(`User not found with id ${id}`);
    }

    const updatedUser = await User.findByIdAndUpdate(id, input, { new: true }).lean();

    return {
      _id: updatedUser._id.toString(),
      userName: updatedUser.userName,
      password: updatedUser.password,
      email: updatedUser.email,
      bio: updatedUser.bio,
      avatarUrl: updatedUser.avatarUrl,
      createdAt: updatedUser.createdAt.toISOString(),
      updatedAt: updatedUser.updatedAt.toISOString(),
    };
  },
};
