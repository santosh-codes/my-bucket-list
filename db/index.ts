import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const uri = process.env.DATABASE_URL || "hello";
console.log(uri);

const client = new MongoClient(uri);

async function Run() {
  try {
    await client.connect();

    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
Run().catch(console.dir);

export { Run };
