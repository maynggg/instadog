/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateUserInput, UpdateUserInput } from "@/generated/resolvers-types";
import { UserEntity, IUserService } from "../user.service";

export class FakeUserService implements IUserService {
  findById(_id: string): Promise<any> {
    throw new Error("Not implemented");
  }

  createOne(_input: CreateUserInput): Promise<any> {
    throw new Error("Not implemented");
  }

  findByUserName(_userName: string): Promise<any> {
    throw new Error("Not implemented");
  }

  findByIdAndUpdate(_id: string, _input: UpdateUserInput): Promise<any> {
    throw new Error("Not implemented");
  }
}
