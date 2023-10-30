/* eslint-disable @typescript-eslint/no-unused-vars */
import { IFollowService } from "../follow.service";

export class FakeFollowService implements IFollowService {
  findByFollowerId(_followerId: string): Promise<any> {
    throw new Error("Not implemented");
  }

  findByFollowingId(_followingId: string): Promise<any> {
    throw new Error("Not implemented");
  }

  getFollowerNum(_followingId: string): Promise<any> {
    throw new Error("Not implemented");
  }

  getFollowingNum(_followerId: string): Promise<any> {
    throw new Error("Not implemented");
  }
}
