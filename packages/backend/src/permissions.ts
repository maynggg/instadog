import { GraphQLError } from "graphql";
import { rule, shield } from "graphql-shield";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isAuthenticated = rule({ cache: "contextual" })((parent, args, context) => {
  if (!context.userId) {
    return new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }
  return true;
});

const isAuthorized = rule({ cache: "contextual" })((parent, args, context) => {
  if (!context.userId || context.userId !== args.id) {
    return new GraphQLError("User is not authorized", {
      extensions: {
        code: "UNAUTHORIZED",
        http: { status: 401 },
      },
    });
  }
  return true;
});

const permissions = shield(
  {
    Mutation: {
      updateUser: isAuthorized,
    },
  },
  { allowExternalErrors: true },
);
export default permissions;
