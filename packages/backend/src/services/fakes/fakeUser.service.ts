/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserEntity, IUserService } from "../user.service";

export class FakeUserService implements IUserService {
  findById(_id: string): Promise<any> {
    throw new Error("Not implemented");
  }

  findByIdAndUpdate(_id: string, _input: Partial<UserEntity>): Promise<any> {
    throw new Error("Not implemented");
  }
}
