import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PORT } from "./config";
import { initDb } from "./db";
import { readFileSync } from "node:fs";
import { createResolvers } from "./resolvers";
import { buildContext } from "./utils";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import permissions from "./permissions";

const typeDefs = readFileSync("../../schema.graphql", "utf8");

const main = async () => {
  await initDb();

  const resolvers = createResolvers();

  const schema = applyMiddleware(
    makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    permissions,
  );

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async ({ req }) => buildContext(req),
  });

  console.log(`🚀  Server ready at: ${url}`);
};

main();
