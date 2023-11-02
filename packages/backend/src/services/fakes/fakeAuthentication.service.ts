/* eslint-disable @typescript-eslint/no-unused-vars */
import { IAuthenticationService } from "../authentication.service";

export class FakeAuthenticationService implements IAuthenticationService {
  hashData(_data: string): Promise<string> {
    throw new Error("Not implemented");
  }

  compareHash(_data: string, _hash: string): Promise<boolean> {
    throw new Error("Not implemented");
  }

  signPayload(_payload: string | Buffer | object): string {
    throw new Error("Not implemented");
  }
}
