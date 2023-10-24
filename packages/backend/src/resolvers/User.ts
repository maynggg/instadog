import { UserResolvers } from "@/generated/resolvers-types";
import { Post } from "../models/post";
import { Follow } from "../models/follow";
import { User } from "../models/user";

const getUser = async (followerId: string) => {
  const user = await User.findById(followerId).lean();

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
};

export const UserResolversImpl: UserResolvers = {
  posts: async (user) => {
    const postsByUser = await Post.find({ userId: user._id }).lean();
    return postsByUser.map((post) => ({
      ...post,
      _id: post._id.toString(),
      userId: post.userId.toString(),
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  },
  followerNum: async (user) => {
    const followers = await Follow.find({ followingId: user._id }).lean();
    return followers.length;
  },
  followingNum: async (user) => {
    const followings = await Follow.find({ followerId: user._id }).lean();
    return followings.length;
  },
  followers: async (user) => {
    const follows = await Follow.find({ followingId: user._id }).lean();
    const followerIds = follows.map((follow) => follow.followerId.toString());

    const followers = Promise.all(followerIds.map((followerId) => getUser(followerId)));
    return followers;
  },
  followings: async (user) => {
    const follows = await Follow.find({ followerId: user._id }).lean();
    const followingIds = follows.map((follow) => follow.followingId.toString());

    const followings = Promise.all(followingIds.map((followingId) => getUser(followingId)));
    return followings;
  },
};
