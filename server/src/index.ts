import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql/index";
import { connectToDatabase } from "./database";
import dotenv from "dotenv";
dotenv.config();

export const app = express();
const port = 4000;

const mount = (app: Application) => {
  (async () => {
    const db = await connectToDatabase();
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({ db }),
    });
    await apolloServer.start();

    apolloServer.applyMiddleware({ app, path: "/api" });

    app.listen(port, () => {
      console.log(`[app]: http://localhost:${port}`);
      console.log(`gql path is ${apolloServer.graphqlPath}`);
    });
  })();
};

mount(express());
