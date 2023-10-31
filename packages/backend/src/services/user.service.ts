import { User } from "../models/user.model";

export type UserEntity = {
  _id: string;
  userName: string;
  password: string;
  email: string;
  bio?: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IUserService {
  findById(id: string): Promise<UserEntity | null>;
  findByIdAndUpdate(id: string, input: Partial<UserEntity>): Promise<UserEntity | null>;
}

export class UserService implements IUserService {
  constructor(private readonly userModel: typeof User) {}

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.userModel.findById(id).lean();

    if (!user) return null;

    return {
      ...user,
      _id: user._id.toString(),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async findByIdAndUpdate(id: string, input: Partial<UserEntity>): Promise<UserEntity | null> {
    const updatedUser = await User.findByIdAndUpdate(id, input, { new: true }).lean();

    if (!updatedUser) return null;

    return {
      ...updatedUser,
      _id: updatedUser._id.toString(),
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };
  }
}
