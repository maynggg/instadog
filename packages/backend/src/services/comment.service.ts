import { Comment } from "../models/comment.model";

export type CommentEntity = {
  _id: string;
  postId: string;
  userId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ICommentService = {
  findCommentsByPostId(postId: string): Promise<CommentEntity[] | null>;
};

export class CommentService implements ICommentService {
  constructor(private readonly commentModel: typeof Comment) {}

  async findCommentsByPostId(postId: string): Promise<CommentEntity[]> {
    const commentsByPost = await this.commentModel.find({ postId: postId }).lean();

    if (!commentsByPost) return null;

    return commentsByPost.map((comment) => ({
      _id: comment._id.toString(),
      postId: comment.postId.toString(),
      userId: comment.userId.toString(),
      text: comment.text,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }));
  }
}
