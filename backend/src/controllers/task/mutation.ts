import { Request, Response } from "express";
import { getDbClient } from "../../../db";

const createTask = async (req: Request, res: Response) => {
  try {
    console.log("Request Body", req.body);
    const db = await getDbClient();
    const tasks = db.database.collection("tasks");
    const data = req.body;
    console.log("Data received:", data);
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
