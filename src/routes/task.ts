import { Router } from "express";
import { deleteTask, getAllTask } from "../controllers/task";

const TaskRoute = Router();

// Add Swagger annotations for the routes
TaskRoute.get("/getAllTask", getAllTask);
TaskRoute.delete("/task/:taskId", deleteTask);

export default TaskRoute;
