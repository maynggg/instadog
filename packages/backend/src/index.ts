import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PORT } from "./config";
import { initDb } from "./db";
import { readFileSync } from "node:fs";
import { createResolvers } from "./resolvers";

const typeDefs = readFileSync("../../schema.graphql", "utf8");

const main = async () => {
  await initDb();

  const resolvers = createResolvers();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

main();
