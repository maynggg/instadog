import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { type IncomingMessage } from "http";
import { AuthPayload } from "./services/authentication.service";

export type AppContext = {
  req: IncomingMessage;
  userId: string;
};

export function buildContext(req: IncomingMessage): AppContext {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];

  if (!token) return null;

  const { userId } = jwt.verify(token, JWT_SECRET) as AuthPayload;

  return {
    req,
    userId,
  };
}
