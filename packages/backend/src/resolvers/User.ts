import { UserResolvers } from "@/generated/resolvers-types";
import { IPostService } from "../services/post.service";
import { IFollowService } from "../services/follow.service";
import { IUserService } from "@/services/user.service";

export const createUserResolvers = ({
  userService,
  postService,
  followService,
}: {
  userService: IUserService;
  postService: IPostService;
  followService: IFollowService;
}): UserResolvers => {
  return {
    posts: async (user) => {
      const postsByUser = await postService.findPostsByUserId(user._id);

      return postsByUser.map((post) => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      }));
    },
    followerNum: async (user) => {
      return followService.getFollowerNum(user._id);
    },
    followingNum: async (user) => {
      return followService.getFollowingNum(user._id);
    },
    followers: async (user) => {
      const follows = await followService.findByFollowingId(user._id);
      const followerIds = follows.map((follow) => follow.followerId.toString());

      const followerUsers = await Promise.all(
        followerIds.map(async (followerId) => {
          const user = await userService.findById(followerId);
          return {
            ...user,
            _id: user._id.toString(),
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString(),
          };
        }),
      );
      return followerUsers;
    },
    followings: async (user) => {
      const follows = await followService.findByFollowerId(user._id);
      const followingIds = follows.map((follow) => follow.followingId.toString());

      const followingUsers = await Promise.all(
        followingIds.map(async (followingId) => {
          const user = await userService.findById(followingId);
          return {
            ...user,
            _id: user._id.toString(),
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString(),
          };
        }),
      );
      return followingUsers;
    },
  };
};
