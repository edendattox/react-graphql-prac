import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql/index";

const app = express();
const port = 4000;

(async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api" });
  app.listen(port, () => {
    console.log(`[app]: http://localhost:${port}`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
  });
})();
