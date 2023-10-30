import { Follow } from "../models/follow.model";

export type FollowEntity = {
  followerId: string;
  followingId: string;
};

export interface IFollowService {
  findByFollowerId(followerId: string): Promise<FollowEntity[] | null>;
  findByFollowingId(followingId: string): Promise<FollowEntity[] | null>;
  getFollowerNum(followingId: string): Promise<number>;
  getFollowingNum(followerId: string): Promise<number>;
}

export class FollowService implements IFollowService {
  constructor(private readonly followModel: typeof Follow) {}

  async findByFollowerId(followerId: string): Promise<FollowEntity[] | null> {
    const follows = await this.followModel.find({ followerId }).lean();

    if (!follows) return null;

    return follows.map((follow) => ({
      followerId: follow.followerId.toString(),
      followingId: follow.followingId.toString(),
    }));
  }

  async findByFollowingId(followingId: string): Promise<FollowEntity[] | null> {
    const follows = await this.followModel.find({ followingId }).lean();

    if (!follows) return null;

    return follows.map((follow) => ({
      followerId: follow.followerId.toString(),
      followingId: follow.followingId.toString(),
    }));
  }

  async getFollowerNum(followingId: string): Promise<number> {
    const followers = await this.followModel.find({ followingId }).lean();

    return followers.length;
  }

  async getFollowingNum(followerId: string): Promise<number> {
    const followings = await this.followModel.find({ followerId }).lean();
    return followings.length;
  }
}
