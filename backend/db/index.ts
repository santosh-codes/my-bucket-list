import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const uri = process.env.DATABASE_URL || "hello";

const client = new MongoClient(uri);

export async function getDbClient() {
  await client.connect();
  const database = client.db("my-bucket-list");

  return { database, client };
}
