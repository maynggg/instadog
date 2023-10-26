import { PostResolvers } from "@/generated/resolvers-types";
import { LikeService } from "../services/like.service";
import { CommentService } from "../services/comment.service";

export const createPostResolvers = ({
  likeService,
  commentService,
}: {
  likeService: LikeService;
  commentService: CommentService;
}): PostResolvers => {
  return {
    commentNum: async (post) => {
      const comments = await commentService.findCommentsByPostId(post._id);
      return comments.length;
    },
    likeNum: async (post) => {
      const likes = await likeService.findLikesByPostId(post._id);
      return likes.length;
    },
    comments: async (post) => {
      const comments = await commentService.findCommentsByPostId(post._id);
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
      const likes = await likeService.findLikesByPostId(post._id);
      return likes.map((like) => ({
        ...like,
        postId: like.postId.toString(),
        userId: like.userId.toString(),
      }));
    },
  };
};
