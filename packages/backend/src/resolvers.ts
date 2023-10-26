import { Resolvers } from "./generated/resolvers-types";
import { createPostResolvers } from "./resolvers/Post";
import { createMutationResolvers } from "./resolvers/Mutation";
import { createQueryResolvers } from "./resolvers/Query";
import { createLikeResolvers } from "./resolvers/Like";
import { UserService } from "./services/user.service";
import { User } from "./models/user.model";
import { createUserResolvers } from "./resolvers/User";
import { PostService } from "./services/post.service";
import { Post } from "./models/post.model";
import { FollowService } from "./services/follow.service";
import { Follow } from "./models/follow.model";
import { LikeService } from "./services/like.service";
import { Like } from "./models/like.model";
import { CommentService } from "./services/comment.service";
import { Comment } from "./models/comment.model";

export const createResolvers: () => Resolvers = () => {
  const userService = new UserService(User);
  const postService = new PostService(Post);
  const followService = new FollowService(Follow);
  const likeService = new LikeService(Like);
  const commentService = new CommentService(Comment);

  return {
    Query: createQueryResolvers({ userService }),
    Mutation: createMutationResolvers({ userService }),
    User: createUserResolvers({ userService, postService, followService }),
    Post: createPostResolvers({ likeService, commentService }),
    Like: createLikeResolvers({ userService }),
  };
};
