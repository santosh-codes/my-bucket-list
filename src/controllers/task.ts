import { Request, Response } from "express";
import { data } from "../../constants";

/**
 * @swagger
 * /getAllTask:
 *   get:
 *     summary: Retrieve all tasks
 *     responses:
 *       200:
 *         description: Successful operation
 */
const getAllTask = (req: Request, res: Response) => {
  try {
    res.send(data);
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

/**
 * @swagger
 * /task/{taskId}:
 *   delete:
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Task deleted successfully
 */
const deleteTask = (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params.taskId);
    console.log(typeof taskId);
    const index = data.findIndex((item) => item.id === taskId);

    if (index !== -1) {
      data.splice(index, 1);
      res.json({
        taskId: taskId,
        message: "Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Task not found",
      });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

export { getAllTask, deleteTask };
