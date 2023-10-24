import { PostResolvers } from "@/generated/resolvers-types";
import { Comment } from "../models/comment";
import { Like } from "../models/like";

export const PostResolversImpl: PostResolvers = {
  commentNum: async (post) => {
    const comments = await Comment.find({ postId: post._id }).lean();
    return comments.length;
  },
  likeNum: async (post) => {
    const likes = await Like.find({ postId: post._id }).lean();
    return likes.length;
  },
  comments: async (post) => {
    const comments = await Comment.find({ postId: post._id }).lean();
    return comments.map((comment) => ({
      ...comment,
      _id: comment._id.toString(),
      postId: comment.postId.toString(),
      userId: comment.userId.toString(),
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
    }));
  },
  likes: async (post) => {
    const likes = await Like.find({ postId: post._id }).lean();
    return likes.map((like) => ({
      ...like,
      postId: like.postId.toString(),
      userId: like.userId.toString(),
    }));
  },
};
