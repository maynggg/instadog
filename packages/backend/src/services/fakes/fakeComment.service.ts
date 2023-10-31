/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommentEntity, ICommentService } from "../comment.service";

export class FakeCommentService implements ICommentService {
  findCommentsByPostId(_postId: string): Promise<any> {
    throw new Error("Not implemented");
  }
}
