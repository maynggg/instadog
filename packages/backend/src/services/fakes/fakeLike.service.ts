/* eslint-disable @typescript-eslint/no-unused-vars */
import { ILikeService } from "../like.service";

export class FakeLikeService implements ILikeService {
  findLikesByPostId(_postId: string): Promise<any> {
    throw new Error("Not implemented");
  }
}
