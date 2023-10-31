/* eslint-disable @typescript-eslint/no-unused-vars */
import { IPostService } from "../post.service";

export class FakePostService implements IPostService {
  findPostsByUserId(_id: string): Promise<any> {
    throw new Error("Not implemented");
  }
}
