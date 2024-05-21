import { Request, Response } from "express";
import { getDbClient } from "../../../db";

/**
 * @swagger
 * /getAllTask:
 *   get:
 *     summary: Retrieve all tasks
 *     responses:
 *       200:
 *         description: Successful operation
 */
const getAllTaskById = async (req: Request, res: Response) => {
  try {
    const db = await getDbClient();
    const tasks = db.database.collection("tasks");
    const taskId = req.params.id;
    const query = { id: taskId };
    const task = await tasks.findOne(query);
    console.log("Task List", task);

    await db.client.close();

    res.send(task);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      Message: "Internal Server Error",
    });
  }
};

export { getAllTaskById };
