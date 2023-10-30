import { Like } from "../models/like.model";

export type LikeEntity = {
  postId: string;
  userId: string;
};

export type ILikeService = {
  findLikesByPostId(postId: string): Promise<LikeEntity[] | null>;
};

export class LikeService implements ILikeService {
  constructor(private readonly likeModel: typeof Like) {}

  async findLikesByPostId(postId: string): Promise<LikeEntity[] | null> {
    const likesByPost = await this.likeModel.find({ postId: postId }).lean();

    if (!likesByPost) return null;

    return likesByPost.map((like) => ({
      postId: like.postId.toString(),
      userId: like.userId.toString(),
    }));
  }
}
