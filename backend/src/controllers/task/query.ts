import { Request, Response } from "express";
import { getDbClient } from "../../../db";
import { ObjectId } from "mongodb";

/**
 * @swagger
 * /getAllTask:
 *   get:
 *     summary: Retrieve all tasks
 *     responses:
 *       200:
 *         description: Successful operation
 */
const getTaskById = async (req: Request, res: Response) => {
  try {
    const db = await getDbClient();
    const tasks = db.database.collection("tasks");
    const taskId = req.params.id;
    const query = { _id: new ObjectId(taskId) };
    const task = await tasks.findOne(query);
    await db.client.close();
    res.send(task);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      Message: "Internal Server Error",
    });
  }
};

export { getTaskById };
