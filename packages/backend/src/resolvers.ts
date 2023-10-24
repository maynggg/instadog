import { Resolvers } from "./generated/resolvers-types";
import { UserResolversImpl } from "./resolvers/User";
import { PostResolversImpl } from "./resolvers/Post";
import { MutationResolversImpl } from "./resolvers/Mutation";
import { QueryResolversImpl } from "./resolvers/Query";
import { LikeResolversImpl } from "./resolvers/Like";

export const resolvers: Resolvers = {
  QueryResolversImpl,
  MutationResolversImpl,
  UserResolversImpl,
  PostResolversImpl,
  LikeResolversImpl,
};
