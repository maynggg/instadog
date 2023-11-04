import { BCRYPT_SALT, JWT_SECRET } from "../config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface IAuthenticationService {
  hashData(data: string): Promise<string>;
  compareHash(data: string, hash: string): Promise<boolean>;
  signPayload(payload: string | Buffer | object): string;
}

export class AuthenticationService implements IAuthenticationService {
  async hashData(data: string): Promise<string> {
    return await bcrypt.hash(data, BCRYPT_SALT);
  }

  async compareHash(data: string, hash: string): Promise<boolean> {
    return await bcrypt.compareSync(data, hash);
  }

  signPayload(payload: string | Buffer | object): string {
    return jwt.sign(payload, JWT_SECRET);
  }
}
