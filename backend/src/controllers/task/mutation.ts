import { Request, Response } from "express";
import { getDbClient } from "../../../db";

/**
 * @swagger
 * /createTask:
 *   post:
 *     summary: Retrieve all tasks
 *     responses:
 *       200:
 *         description: Successful operation
 */

const createTask = async (req: Request, res: Response) => {
  try {
    const db = await getDbClient();
    const tasks = db.database.collection("tasks");
    const data = req.body;
    const result = await tasks.insertOne(data);

    await db.client.close();

    res.status(201).json({
      message: "Task Created Successfully",
      taskId: result.insertedId,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

export { createTask };
