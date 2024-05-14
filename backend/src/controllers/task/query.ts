import { Request, Response } from "express";
import { getDbClient } from "../../../backend/db";

/**
 * @swagger
 * /getAllTask:
 *   get:
 *     summary: Retrieve all tasks
 *     responses:
 *       200:
 *         description: Successful operation
 */
const getAllTask = async (req: Request, res: Response) => {
  try {
    const db = await getDbClient();
    const movies = db.database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log("movies list", movie);

    await db.client.close();

    res.send(movie);
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

export { getAllTask };
