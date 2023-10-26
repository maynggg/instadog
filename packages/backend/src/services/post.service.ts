import { Post } from "../models/post.model";

export type PostEntity = {
  _id: string;
  userId: string;
  photoUrl: string;
  caption?: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IPostService {
  findPostsByUserId(id: string, input: Partial<PostEntity>): Promise<PostEntity[] | null>;
}

export class PostService implements IPostService {
  constructor(private readonly postModel: typeof Post) {}

  async findPostsByUserId(userId: string): Promise<PostEntity[]> {
    const postsByUser = await this.postModel.find({ userId: userId }).lean();

    if (!postsByUser) return null;

    return postsByUser.map((post) => ({
      ...post,
      _id: post._id.toString(),
      userId: post.userId.toString(),
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }));
  }
}
