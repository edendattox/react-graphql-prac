import * as mongoDB from "mongodb";
import dotenv from "dotenv";
import { Database } from "../lib/types";
dotenv.config();

const uri: string | undefined = process.env.MONGO_URL!;

export const connectToDatabase = async (): Promise<Database> => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(uri);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  console.log(`Successfully connected to database: ${db.databaseName} `);

  return {
    listings: db.collection("test_listings"),
  };
};
